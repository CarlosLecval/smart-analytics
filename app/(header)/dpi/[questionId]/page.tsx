import { auth } from "@/auth";
import { getUserTakenTest } from "@/app/lib/data";
import { prisma } from "@/prisma";
import QuestionForm from "./components/questionForm";
import { redirect } from "next/navigation";

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
  const session = await auth()
  if (!session?.user) return <>Unauthorized</>

  const userTakenTest = await getUserTakenTest(session.user.email as string);
  if (userTakenTest === null || userTakenTest.endedAt !== null) return redirect("/home")
  if (userTakenTest.startedAt === null) return redirect("/dpi/lectura")

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

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col w-4/6 gap-3 h-3/5">
        <div className="rounded-full w-full min-h-8 bg-smart-green" />
        <div className="bg-light-green py-2 px-3 rounded-md">
          <h2 className="font-bold text-smart-green text-lg">{question.section.title}</h2>
          <p className="font-normal text-smart-green text-base">{question.section.instructions}</p>
        </div>
        <QuestionForm questionText={question.text} questionOrder={question.order} options={question.options} />
      </div>
    </div>
  )
}
