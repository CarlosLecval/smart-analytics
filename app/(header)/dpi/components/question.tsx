'use client'

import MainButton from "@/app/ui/components/mainButton";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Question({ currentQuestion }: { currentQuestion: string }) {
  const [questionNumber, setQuestionNumber] = useState(currentQuestion)

  useEffect(() => {
    console.log(`Question number: ${questionNumber}`)
  }, [questionNumber])

  return (
    <div className="flex flex-col w-4/6 gap-3 h-3/5">
      <div className="rounded-full w-full min-h-8 bg-smart-green" />
      <div className="bg-light-green py-2 px-3 rounded-md">
        <h2 className="font-bold text-smart-green text-lg">Question number {questionNumber}</h2>
        <p className="font-normal text-smart-green text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
      </div>
      <form className="pl-3 grow">
        <h3 className="font-semibold text-2xl pb-2">Lorem ipsum dolor sit amet</h3>
        <div className="flex flex-col text-xl pl-4 gap-1">
          Options
          {/* {options.map(option => ( */}
          {/*   <ScaleQuestion key={option.value} optionsLength={options.length} option={option.label} /> */}
          {/* ))} */}
        </div>
      </form>
      <div className="flex justify-between items-center">
        <Link href="/">
          <span className="flex">
            <Image src="/arrow-left.svg" alt="Arrow icon" width={20} height={18} />
            <p className="text-lg text-lighter-green">Pregunta anterior</p>
          </span>
        </Link>
        <button>
          <MainButton text="Siguiente" />
        </button>
      </div>
    </div>
  )
}
