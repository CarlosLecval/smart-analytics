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
