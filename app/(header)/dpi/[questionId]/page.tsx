import { prisma } from "@/prisma";
import QuestionForm from "./components/questionForm";

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

  return (
    <div className="flex flex-col w-4/6 gap-3 h-3/5">
      <QuestionForm question={question} lastQuestionOrder={lastQuestionOrder.order} />
    </div>
  )
}
