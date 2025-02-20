import Breadcrumbs from "@/app/ui/components/breadcrumbs";
import { prisma } from "@/prisma";
import { Option, QuestionType } from "@prisma/client";
import Image from "next/image";
import { SelectionQuestion } from "@/app/ui/components/questionTypes/selectionQuestion";
import TextQuestion from "@/app/ui/components/questionTypes/textQuestion";
import { OptionQuestion } from "@/app/ui/components/questionTypes/optionQuestion";

function RenderOptions({ questionType, options }: { questionType: QuestionType, options: Option[] }) {
  if (questionType === 'OPTION')
    return options.map(option => (
      <OptionQuestion key={option.id} label={option.text} value={option.id.toString()} />
    ))
  if (questionType === 'SCALE')
    return <div>
      {options.map((option, number) => (
        <p key={option.id}> {`${number + 1}. ${option.text}`}</p>
      ))
      }
    </div >
  //return <ScaleQuestion options={options} />
  if (questionType === 'SELECTION')
    return options.map(option => (
      <SelectionQuestion key={option.id} label={option.text} value={option.id.toString()} />
    ))
  if (questionType === 'TEXT')
    return <TextQuestion />
  return <>Error</>
}

export default async function Page(props: { params: Promise<{ userTakenTestId: string }> }) {
  const userTakenTestId = (await props.params).userTakenTestId;
  const userTakenTest = await prisma.userTakenTest.findUnique({
    where: {
      id: Number(userTakenTestId) || -1,
    },
    include: {
      user: true,
      userAnswers: {
        include: {
          question: {
            include: {
              options: true
            }
          }
        }
      }
    }
  })

  if (!userTakenTest) return (
    <>
      <h1>Test no encontrado</h1>
      <p>El test que buscas no existe.</p>
    </>
  )

  return (
    <main>
      <div className="flex items-start justify-between">
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Alumnos', href: '/dashboard/alumnos' },
            {
              label: userTakenTest.user.name as string,
              href: `/dashboard/alumnos/${userTakenTestId}`,
              active: true,
            },
          ]}
        />
        <button className="bg-light-green py-1 px-3 rounded-md">
          <div className="flex items-center">
            <Image src="/file-check-alt.svg" alt="View results icon" width={24} height={24} />
            <span className="text-lg text-smart-green">Ver resultados</span>
          </div>
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {userTakenTest.userAnswers.map((userAnswer, index) => (
          <div key={index} className="bg-gray-50 rounded-md px-4 py-2">
            <h1 className="font-semibold text-lg">{userAnswer.question.text}</h1>
            <div>
              <RenderOptions questionType={userAnswer.question.type} options={userAnswer.question.options} />
            </div>
          </div>
        ))}
      </div>
    </main >
  )
}
