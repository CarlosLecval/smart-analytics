"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/prisma";
import { userSchema } from "../schemas";
import { signIn } from "@/auth";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export async function updateUserInfo(email: string, prevState: { message: string | null }, formData: FormData): Promise<typeof prevState> {
  const FormSchema = userSchema.pick({ sex: true, semester: true, degree: true })
  const validatedFields = FormSchema.safeParse({
    sex: formData.get('Sexo'),
    degree: formData.get('Carrera'),
    semester: formData.get('Semestre')
  })
  if (!validatedFields.success) return { message: "No se pudo actualizar la información del usuario" }
  try {
    await prisma.user.update({
      where: { email: email },
      data: {
        sex: validatedFields.data.sex,
        degreeId: validatedFields.data.degree,
        semesterId: validatedFields.data.semester
      }
    })
  }
  catch (e) {
    console.log((e as Error).stack)
    return { message: "No se pudo actualizar la información del usuario" }
  }
  revalidatePath("/dashboard/alumnos")
  redirect("/home")
}

export async function addAdmin(
  prevState: { email?: string, fieldMessage?: string, message?: string },
  formData: FormData
): Promise<typeof prevState> {
  const formEmail = formData.get("correo")
  if (formEmail === null || formEmail === "") return { fieldMessage: "El correo está vacío" }
  const email = z
    .string()
    .email({ message: "No es un correo válido" })
    .regex(/@up\.edu\.mx$/, { message: "No es un correo institucional" })
    .safeParse(formEmail)
  if (!email.success) return { fieldMessage: email.error.format()._errors.join(" "), email: formEmail.toString() }
  await prisma.admin.create({
    data: {
      email: email.data
    }
  })
  revalidatePath('/dashboard/admins');
  redirect("/dashboard/admins")
}

export async function removeAdmin(
  email: string,
  _prevState: { success: boolean | null, message?: string }
): Promise<typeof _prevState> {
  await prisma.admin.delete({
    where: {
      email: email
    }
  })
  revalidatePath('/dashboard/admins');
  return { success: true }
}

export async function deleteUser(
  id: string,
  _prevState: { success: boolean | null, message?: string },
): Promise<typeof _prevState> {
  await prisma.user.delete({
    where: {
      id: id
    }
  })
  revalidatePath('/dashboard/alumnos');
  return { success: true }
}

export async function signInAction(redirectUrl: string | null) {
  await signIn("google", { redirectTo: redirectUrl == null ? "/home" : redirectUrl })
}
