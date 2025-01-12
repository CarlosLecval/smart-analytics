"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/prisma";
import { userSchema } from "./schemas";
import { signIn } from "@/auth";
import { getUserTakenTest } from "@/app/lib/data";

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


export async function startTest(email: string, prevState: { message?: string | null, testId?: number }): Promise<typeof prevState> {
  const userTakenTest = await getUserTakenTest(email);
  if (userTakenTest !== null) return { message: "Ya has iniciado la prueba" };
  const test = await prisma.test.findFirst()
  if (test === null) return { message: "No hay pruebas disponibles" }
  const createdTest = await prisma.userTakenTest.create({
    data: {
      user: {
        connect: {
          email: email
        }
      },
      test: {
        connect: {
          id: test.id
        }
      }
    }
  });
  return {
    testId: createdTest.id
  }
}

export async function signInAction(redirectUrl: string | null) {
  await signIn("google", { redirectTo: redirectUrl == null ? "/home" : redirectUrl })
}
