// import { auth } from "@/auth";
import { redirect } from "next/navigation";
// import { getUserTakenTest } from "@/app/lib/data";
import { prisma } from "@/prisma";
import Image from "next/image";
import MainButton from "@/app/ui/components/mainButton";
import { OptionQuestion } from "../components/option";

async function nextQuestion(questionOrder: number) {
  "use server"
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
  if (next === null) redirect("/home")
  redirect(`/dpi/${next.id}`)
}

async function lastQuestion(questionOrder: number) {
  "use server"
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
  if (last === null) redirect("/home")
  redirect(`/dpi/${last.id}`)
}

export async function generateStaticParams() {
  const test = await prisma.test.findFirst({
    select: {
      id: true
    }
  })
  if (test === null) return [];
  const questions = await prisma.question.findMany({
    where: {
      testId: test.id
    },
    select: {
      id: true
    }
  })
  return questions.map(question => ({
    questionId: question.id.toString()
  }))
}

export default async function DpiServerComp({ params }: { params: Promise<{ questionId: string }> }) {
  // const session = await auth()
  // if (!session?.user) return <>Unauthorized</>
  //
  // const userTakenTest = await getUserTakenTest(session.user.email as string);
  // if (userTakenTest === null || userTakenTest.endedAt !== null) return redirect("/home")
  // if (userTakenTest.startedAt === null) return redirect("/dpi/lectura")

  const questionId = (await params).questionId
  const question = await prisma.question.findUnique({
    where: {
      id: Number(questionId)
    },
    include: {
      section: true,
      options: true
    }
  })

  if (question === null) return <>Question not found</>

  const nextQuestionWithOrder = nextQuestion.bind(null, question.order)
  const lastQuestionWithOrder = lastQuestion.bind(null, question.order)

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col w-4/6 gap-3 h-3/5">
        <div className="rounded-full w-full min-h-8 bg-smart-green" />
        <div className="bg-light-green py-2 px-3 rounded-md">
          <h2 className="font-bold text-smart-green text-lg">{question.section.title}</h2>
          <p className="font-normal text-smart-green text-base">{question.section.instructions}</p>
        </div>
        <form className="pl-3 grow">
          <h3 className="font-semibold text-2xl pb-2">{question.text}</h3>
          <div className="flex flex-col text-xl pl-4 gap-1">
            {question.options.map(option => (
              <OptionQuestion key={option.id} label={option.text} value={option.id.toString()} />
            ))}
          </div>
        </form>
        <div className="flex justify-between items-center">
          <form action={lastQuestionWithOrder}>
            <button type="submit" className="flex items-center">
              <Image src="/arrow-left.svg" alt="Arrow icon" width={20} height={18} />
              <p className="text-lg text-lighter-green">Pregunta anterior</p>
            </button>
          </form>
          <form action={nextQuestionWithOrder}>
            <button type="submit">
              <MainButton text="Siguiente" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
