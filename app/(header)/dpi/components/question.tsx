'use client'

import MainButton from "@/app/ui/components/mainButton";
import { type TestSection, type Question as prismaQuestion, type Option as prismaOption } from "@prisma/client";
import Image from "next/image";
import { useActionState, useEffect, useState } from "react";
import { OptionQuestion } from "./option";
import { getLastQuestion, getNextQuestion } from "@/app/lib/actions";
import QuestionLoading from "../[questionId]/loading";

export default function Question(
  { currentQuestion }: { currentQuestion: prismaQuestion & { options: prismaOption[], section: TestSection } }
) {
  const [question, setQuestion] = useState(currentQuestion)
  const nextQuestionWithOrder = getNextQuestion.bind(null, question.order)
  const lastQuestionWithOrder = getLastQuestion.bind(null, question.order)
  const [nextQuestionState, nextQuestionAction, isPendingNext] = useActionState(nextQuestionWithOrder, { fetchedQuestion: null })
  const [lastQuestionState, lastQuestionAction, isPendingLast] = useActionState(lastQuestionWithOrder, { fetchedQuestion: null })

  useEffect(() => {
    if (nextQuestionState.fetchedQuestion !== null) setQuestion(nextQuestionState.fetchedQuestion)
  }, [nextQuestionState])

  useEffect(() => {
    if (lastQuestionState.fetchedQuestion !== null) setQuestion(lastQuestionState.fetchedQuestion)
  }, [lastQuestionState])

  if (isPendingNext || isPendingLast) return (
    <QuestionLoading />
  )

  return (
    <div className="flex flex-col w-4/6 gap-3 h-3/5">
      <div className="rounded-full w-full min-h-8 bg-smart-green" />
      <div className="bg-light-green py-2 px-3 rounded-md">
        <h2 className="font-bold text-smart-green text-lg">{question.section.title}</h2>
        <p className="font-normal text-smart-green text-base">{question.section.instructions}</p>
      </div>
      <div className="pl-3 grow">
        <h3 className="font-semibold text-2xl pb-2">{question.text}</h3>
        <div className="flex flex-col text-xl pl-4 gap-1">
          {question.options.map(option => (
            <OptionQuestion key={option.id} label={option.text} value={option.id.toString()} />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <form action={lastQuestionAction}>
          <button type="submit" className="flex items-center">
            <Image src="/arrow-left.svg" alt="Arrow icon" width={20} height={18} />
            <p className="text-lg text-lighter-green">Pregunta anterior</p>
          </button>
        </form>
        <form action={nextQuestionAction}>
          <button type="submit">
            <MainButton text="Siguiente" />
          </button>
        </form>
      </div>
    </div>
  )
}
