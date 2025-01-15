import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getUserTakenTest } from "@/app/lib/data";
import { prisma } from "@/prisma";
import Question from "./components/question";

export default async function DpiTest() {
  const session = await auth()
  if (!session?.user) return <>Unauthorized</>

  const userTakenTest = await getUserTakenTest(session.user.email as string);
  if (userTakenTest === null || userTakenTest.endedAt !== null) return redirect("/home")
  if (userTakenTest.startedAt === null) return redirect("/dpi/lectura")

  const lastAnsweredQuestion = await prisma.userAnswer.findFirst({
    where: {
      userTakenTestId: userTakenTest.id
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

  const next = await prisma.question.findFirst({
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

  if (next === null) return redirect("/home")

  return (
    <div className="flex items-center justify-center w-full">
      <Question currentQuestion={next} />
    </div>
  )
}
