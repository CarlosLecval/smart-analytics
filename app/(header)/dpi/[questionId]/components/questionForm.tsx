'use client'

import MainButton from "@/app/ui/components/mainButton";
import { Option } from "@prisma/client";
import Image from "next/image";
import { OptionQuestion } from "./option";
import { redirectToLastQuestion, redirectToNextQuestion } from "@/app/lib/actions";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import Loader from "@/app/ui/components/loader";

export default function QuestionForm(
  { questionText, options, questionOrder }: {
    questionText: string,
    options: Option[],
    questionOrder: number
  }
) {
  const nextQuestionWithOrder = redirectToNextQuestion.bind(null, questionOrder)
  const lastQuestionWithOrder = redirectToLastQuestion.bind(null, questionOrder)
  const [state, lastQuestionAction, isPendingLast] = useActionState(lastQuestionWithOrder, { message: null })

  useEffect(() => {
    if (state.message !== null) toast.error(state.message)
  }, [state])

  return (
    <form className="flex flex-col grow" action={nextQuestionWithOrder}>
      <div className="pl-3 grow">
        <h3 className="font-semibold text-2xl pb-2">{questionText}</h3>
        <div className="flex flex-col text-xl pl-4 gap-1">
          {options.map(option => (
            <OptionQuestion key={option.id} label={option.text} value={option.id.toString()} />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button formAction={lastQuestionAction} className="flex items-center" disabled={isPendingLast}>
          {isPendingLast ?
            (<span className="pr-1"><Loader isSmall /></span>)
            : (<Image src="/arrow-left.svg" alt="Arrow icon" width={20} height={18} />)
          }
          <p className="text-lg text-lighter-green">Pregunta anterior</p>
        </button>
        <button type="submit">
          <MainButton text="Siguiente" />
        </button>
      </div>
    </form>
  )
}
