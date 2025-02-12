"use server"

import { z } from "zod"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/prisma";

export default async function createDegree(prevState: { fieldMessage?: string, degree?: string }, formData: FormData): Promise<typeof prevState> {
  const formDegree = formData.get("carrera")
  if (formDegree === null || formDegree === "") return { fieldMessage: "El nombre de la carrera está vacío" }
  const degree = z
    .string()
    .safeParse(formDegree)
  if (!degree.success) return { fieldMessage: degree.error.format()._errors.join(" "), degree: degree.toString() }
  await prisma.degree.create({
    data: {
      name: degree.data
    }
  })
  revalidatePath('/dashboard/carreras');
  redirect("/dashboard/carreras")

}

export async function deleteDegree(
  id: number,
  _prevState: { success: boolean | null, message?: string }
): Promise<typeof _prevState> {
  await prisma.degree.delete({
    where: {
      id: id
    }
  })
  revalidatePath('/dashboard/carreras');
  return { success: true }
}

export async function updateDegree(
  id: number,
  prevState: { fieldMessage?: string, degree?: string },
  formData: FormData
): Promise<typeof prevState> {
  const formDegree = formData.get("carrera")
  if (formDegree === null || formDegree === "") return { fieldMessage: "El nombre de la carrera no puede estar vacío" }
  const degree = z
    .string()
    .safeParse(formDegree)
  if (!degree.success) return { fieldMessage: degree.error.format()._errors.join(" "), degree: degree.toString() }
  await prisma.degree.update({
    where: {
      id: id
    },
    data: {
      name: degree.data
    }
  })
  revalidatePath('/dashboard/carreras');
  redirect("/dashboard/carreras")
}
