'use client'

import MainButton from "@/app/ui/components/mainButton";
import { Option, Question, TestSection } from "@prisma/client";
import Image from "next/image";
import { OptionQuestion } from "./option";
import { redirectToLastQuestion, redirectToNextQuestion } from "@/app/lib/actions";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

function LastQuestionLoader() {
  return (
    <div role="status">
      <svg aria-hidden="true" className="w-4 h-4 text-gray-300 animate-spin fill-smart-green" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default function QuestionForm(
  { question, lastQuestionOrder }: {
    question: Question & { options: Option[], section: TestSection },
    lastQuestionOrder: number
  }
) {
  const questionPercentage = (question.order / lastQuestionOrder) * 100
  const nextQuestionWithOrder = redirectToNextQuestion.bind(null, question.order)
  const lastQuestionWithOrder = redirectToLastQuestion.bind(null, question.order)
  const [_, nextQuestionAction, isPendingNext] = useActionState(nextQuestionWithOrder, null)
  const [state, lastQuestionAction, isPendingLast] = useActionState(lastQuestionWithOrder, { message: null })

  useEffect(() => {
    if (state.message !== null) toast.error(state.message)
  }, [state])

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
        <div className="pl-3 grow">
          <h3 className="font-semibold text-2xl pb-2">{question.text}</h3>
          <div className="flex flex-col text-xl pl-4 gap-1">
            {question.options.map(option => (
              <OptionQuestion key={option.id} label={option.text} value={option.id.toString()} />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button formAction={lastQuestionAction} className="flex items-center" disabled={isPendingLast}>
            {isPendingLast ?
              (<span className="pr-1"><LastQuestionLoader /></span>)
              : (<Image src="/arrow-left.svg" alt="Arrow icon" width={20} height={18} />)
            }
            <p className="text-lg text-lighter-green">Pregunta anterior</p>
          </button>
          <button type="submit">
            <MainButton text="Siguiente" isLoading={isPendingNext} />
          </button>
        </div>
      </form >
    </>
  )
}
