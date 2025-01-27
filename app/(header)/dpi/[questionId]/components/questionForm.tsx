'use client'

import MainButton from "@/app/ui/components/mainButton";
import { Option, Question, QuestionType, TestSection } from "@prisma/client";
import Image from "next/image";
import { OptionQuestion } from "./optionQuestion";
import { redirectToNextQuestion } from "@/app/lib/actions";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import useSWR, { Fetcher } from "swr";
import { redirect } from "next/navigation";
import QuestionLoading from "../loading";
import { ScaleQuestion } from "./scaleQuestion";
import { SelectionQuestion } from "./selectionQuestion";
import TextQuestion from "./textQuestion";
import Link from "next/link";
import clsx from "clsx";

function RenderOptions({ questionType, options }: { questionType: QuestionType, options: Option[] }) {
  if (questionType === 'OPTION')
    return options.map(option => (
      <OptionQuestion key={option.id} label={option.text} value={option.id.toString()} />
    ))
  if (questionType === 'SCALE')
    return <ScaleQuestion options={options} />
  if (questionType === 'SELECTION')
    return options.map(option => (
      <SelectionQuestion key={option.id} label={option.text} value={option.id.toString()} />
    ))
  if (questionType === 'TEXT')
    return <TextQuestion />
  return <>Error</>
}

type validationResponse = {
  userTakenTest: number
} | {
  redirect: string
}

const fetcher: Fetcher<validationResponse, string> = async (url: string) => {
  try {
    const response = await fetch(url)
    if (response.ok) return response.json()
    else if (response.status === 403) return response.json()
    else throw new Error('Ocurrió un error')
  }
  catch (error) {
    console.log(error)
    throw new Error('Ocurrió un error')
  }
}

export default function QuestionForm(
  { question, lastQuestionOrder, prevQuestionId }: {
    question: Question & { options: Option[], section: TestSection },
    lastQuestionOrder: number,
    prevQuestionId: number | null
  }
) {
  const questionPercentage = (question.order / lastQuestionOrder) * 100
  const nextQuestionWithOrder = redirectToNextQuestion.bind(null, { order: question.order, id: question.id, type: question.type })
  const [nextState, nextQuestionAction, isPendingNext] = useActionState(nextQuestionWithOrder, { message: null })
  const { data, error, isLoading } = useSWR('/api/user/test', fetcher)

  useEffect(() => {
    if (nextState.message !== null) toast.error(nextState.message)
  }, [nextState])

  useEffect(() => {
    if (error) toast.error('Ocurrió un error')
  }, [error])

  useEffect(() => {
    if (data && "redirect" in data) redirect(data.redirect)
  }, [data])

  if (isLoading) return <QuestionLoading includeContainer={false} />

  return (
    <>
      <div className="rounded-full w-full min-h-8 bg-gray-200">
        <div className="bg-smart-green h-full rounded-full" style={{ width: `${questionPercentage}%` }} />
      </div>
      <div className="bg-light-green py-2 px-3 rounded-md">
        <h2 className="font-bold text-smart-green text-lg">{question.section.title}</h2>
        <p className="font-normal text-smart-green text-base">{question.section.instructions}</p>
      </div>
      <form className="flex flex-col grow" action={nextQuestionAction}>
        <input name='userTakenTest' type="hidden" value={data && 'userTakenTest' in data ? data.userTakenTest : undefined} />
        <div className="pl-3 grow">
          <h3 className="font-semibold text-2xl pb-2">{question.text}</h3>
          <div className="flex flex-col text-xl pl-4 gap-1">
            <RenderOptions questionType={question.type} options={question.options} />
          </div>
        </div>
        <div
          className={
            clsx("flex items-center", {
              'justify-between': prevQuestionId !== null,
              'justify-end': prevQuestionId === null
            })}
        >
          {prevQuestionId !== null && (
            <Link href={`/dpi/${prevQuestionId}`} className="flex items-center">
              <Image src="/arrow-left.svg" alt="Arrow icon" width={20} height={18} />
              <p className="text-lg text-lighter-green">Pregunta anterior</p>
            </Link>
          )}
          <button type="submit">
            <MainButton text="Siguiente" isLoading={isPendingNext} />
          </button>
        </div>
      </form >
    </>
  )
}
