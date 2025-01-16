"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/prisma";
import { userSchema } from "./schemas";
import { signIn } from "@/auth";
import { getUserTakenTest } from "@/app/lib/data";

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
    console.log(e)
    return { message: "No se pudo actualizar la información del usuario" }
  }
  redirect("/home")
}

export async function startTest(email: string, _prevState: { message?: string | null, testId?: number }): Promise<typeof _prevState> {
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

async function getNextQuestion(userTakenTestId: number) {
  const lastAnsweredQuestion = await prisma.userAnswer.findFirst({
    where: {
      userTakenTestId: userTakenTestId
    },
    select: {
      question: {
        select: {
          order: true
        }
      }
    },
    orderBy: {
      question: {
        order: 'desc'
      }
    }
  })

  return await prisma.question.findFirst({
    where: {
      order: {
        gt: lastAnsweredQuestion?.question.order ?? -1
      }
    },
    include: {
      options: true,
      section: true
    },
    orderBy: {
      order: 'asc'
    }
  })
}

export async function continueTest(email: string, _prevState: { message: string | null }): Promise<typeof _prevState> {
  const userTakenTest = await getUserTakenTest(email);
  if (userTakenTest === null) return { message: "No has iniciado la prueba" };
  const next = await getNextQuestion(userTakenTest.id)

  if (next === null) return { message: "Ya has terminado la prueba" }

  redirect(`/dpi/${next.id}`)
}

export async function finishReading(testId: number, _prevState: { message: string | null }): Promise<typeof _prevState> {
  const userTakenTest = await prisma.userTakenTest.findUnique({
    where: {
      id: testId
    }
  });
  if (userTakenTest === null) return { message: "No se encontró prueba" }
  if (userTakenTest.endedAt !== null) return redirect("/home")
  if (userTakenTest.startedAt === null)
    await prisma.userTakenTest.update({
      where: {
        id: userTakenTest.id
      },
      data: {
        startedAt: new Date()
      }
    })
  const next = await getNextQuestion(userTakenTest.id)
  if (next === null) return redirect("/home")
  redirect(`/dpi/${next.id}`)
}

export async function redirectToNextQuestion(questionOrder: number) {
  const next = await prisma.question.findFirst({
    where: {
      order: {
        gt: questionOrder
      }
    },
    select: {
      id: true
    },
    orderBy: {
      order: 'asc'
    }
  })
  if (next === null) return redirect("/home")
  redirect(`/dpi/${next.id}`)
}

export async function redirectToLastQuestion(
  questionOrder: number,
  _prevState: { message: string | null }
): Promise<typeof _prevState> {
  const last = await prisma.question.findFirst({
    where: {
      order: {
        lt: questionOrder
      }
    },
    select: {
      id: true
    },
    orderBy: {
      order: 'desc'
    }
  })
  if (last === null) return { message: "No hay preguntas anteriores" }
  redirect(`/dpi/${last.id}`)
}

export async function signInAction(redirectUrl: string | null) {
  await signIn("google", { redirectTo: redirectUrl == null ? "/home" : redirectUrl })
}
