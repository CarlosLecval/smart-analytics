'use client'

import MainButton from "@/app/ui/components/mainButton";
import { startTest } from "@/app/lib/actions";
import { redirect } from "next/navigation";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import Loader from "@/app/ui/components/loader";

export default function StartTestButton({ email }: { email: string }) {
  const startTestWithEmail = startTest.bind(null, email);
  const [state, formAction, isPending] = useActionState(startTestWithEmail, { message: null })

  useEffect(() => {
    if (state.message != null) toast.error(state.message)
    if (state.testId !== undefined) {
      localStorage.setItem('testId', state.testId.toString())
      redirect("/dpi/lectura")
    }
  }, [state])

  if (isPending) return <Loader />
  return (
    <form action={formAction}>
      <button type="submit">
        <MainButton text="Iniciar prueba" />
      </button>
    </form>
  )
}
