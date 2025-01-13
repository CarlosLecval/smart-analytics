"use client"

import { finishReading } from "@/app/lib/actions";
import Loader from "@/app/ui/components/loader";
import MainButton from "@/app/ui/components/mainButton";
import { redirect } from "next/navigation";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

export default function FinishReadingButton({ testId }: { testId: number }) {
  const finishReadingWithId = finishReading.bind(null, testId)
  const [state, formAction, isPending] = useActionState(finishReadingWithId, { message: null })

  useEffect(() => {
    if (state.message !== null) {
      toast.error(state.message)
      redirect("/home")
    }
  }, [state])

  if (isPending) return <div className="w-full flex justify-center pt-5 pb-4"><Loader /></div>

  return (
    <form action={formAction} className="w-full flex justify-center pt-5 pb-4">
      <button>
        <MainButton text="Terminar lectura" />
      </button>
    </form>
  )
}
