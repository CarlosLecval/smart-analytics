"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/prisma";
import { userSchema } from "./schemas";
import { signIn } from "@/auth";
import { getUserTakenTest } from "@/app/lib/data";
import { Prisma, QuestionType } from "@prisma/client";

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

export async function redirectToNextQuestion(
  question: { order: number, id: number, type: QuestionType },
  _prevState: { message: string | null },
  formData: FormData
): Promise<typeof _prevState> {
  const formAnswer = formData.getAll('question')
  const userTakenTestId = formData.get("userTakenTest")
  if (userTakenTestId === null) return { message: "Ocurrió un error" }
  if (formAnswer.length === 0) return { message: "No olvides responder la pregunta" }
  let answer;
  if (question.type === 'TEXT') {
    answer = {
      text: formAnswer[0]
    }
  }
  else if (question.type === 'SCALE') {
    answer = {
      list: (formAnswer[0] as string).split(',')
    }
  }
  else if (question.type === 'OPTION') {
    answer = {
      answer: formAnswer[0]
    }
  }
  else {
    answer = {
      selection: formAnswer
    }
  }
  answer = answer as Prisma.JsonObject
  const upsertAnswer = prisma.userAnswer.upsert({
    where: {
      userTakenTestId_questionId: {
        userTakenTestId: Number(userTakenTestId),
        questionId: question.id
      }
    },
    update: {
      answer: answer
    },
    create: {
      userTakenTestId: Number(userTakenTestId),
      questionId: question.id,
      answer: answer
    }
  })
  const getNext = prisma.question.findFirst({
    where: {
      order: {
        gt: question.order
      }
    },
    select: {
      id: true
    },
    orderBy: {
      order: 'asc'
    }
  })
  const [_, next] = await Promise.all([upsertAnswer, getNext])
  if (next !== null) {
    return redirect(`/dpi/${next.id}`)
  }
  const getTotalQuestions = prisma.question.count({
    where: {
      test: {
        name: "DPI"
      }
    }
  })
  const getAnsweredQuestions = prisma.userAnswer.count({
    where: {
      userTakenTestId: Number(userTakenTestId)
    }
  })
  const [totalQuestions, answeredQuestions] = await Promise.all([getTotalQuestions, getAnsweredQuestions])
  if (totalQuestions !== answeredQuestions) {
    return { message: "No has contestado todas las preguntas" }
  }
  await prisma.userTakenTest.update({
    where: {
      id: Number(userTakenTestId)
    },
    data: {
      endedAt: new Date()
    }
  })
  redirect("/home")
}

export async function signInAction(redirectUrl: string | null) {
  await signIn("google", { redirectTo: redirectUrl == null ? "/home" : redirectUrl })
}
