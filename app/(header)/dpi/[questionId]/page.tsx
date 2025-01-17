import { auth } from "@/auth";
// import { getUserTakenTest } from "@/app/lib/data";
import { prisma } from "@/prisma";
import QuestionForm from "./components/questionForm";
// import { redirect } from "next/navigation";

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

  // const userTakenTest = await getUserTakenTest(session.user.email as string);
  // if (userTakenTest === null || userTakenTest.endedAt !== null) return redirect("/home")
  // if (userTakenTest.startedAt === null) return redirect("/dpi/lectura")

  const questionId = (await params).questionId
  const lastQuestionOrder = await prisma.question.findFirst({
    where: {
      test: {
        name: "DPI"
      }
    },
    select: {
      order: true
    },
    orderBy: {
      order: "desc"
    }
  })

  const question = await prisma.question.findUnique({
    where: {
      id: Number(questionId)
    },
    include: {
      section: true,
      options: true
    }
  })

  if (question === null || lastQuestionOrder === null) return <>Question not found</>

  const questionPercentage = (question.order / lastQuestionOrder.order) * 100

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col w-4/6 gap-3 h-3/5">
        <div className="rounded-full w-full min-h-8 bg-gray-200">
          <div className="bg-smart-green h-full rounded-full" style={{ width: `${questionPercentage}%` }} />
        </div>
        <div className="bg-light-green py-2 px-3 rounded-md">
          <h2 className="font-bold text-smart-green text-lg">{question.section.title}</h2>
          <p className="font-normal text-smart-green text-base">{question.section.instructions}</p>
        </div>
        <QuestionForm question={question} lastQuestionOrder={lastQuestionOrder.order} />
      </div>
    </div>
  )
}
