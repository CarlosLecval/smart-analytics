"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/prisma";
import { userSchema } from "./data";
import { signIn } from "@/auth";

interface FormActionState {
  message: string | null
}

export async function updateUserInfo(email: string, prevState: FormActionState, formData: FormData): Promise<FormActionState> {
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
    return { message: "No se pudo actualizar la información del usuario" }
  }
  redirect("/home")
}

export async function signInAction(redirectUrl: string | null) {
  await signIn("google", { redirectTo: redirectUrl == null ? "/home" : redirectUrl })
}
