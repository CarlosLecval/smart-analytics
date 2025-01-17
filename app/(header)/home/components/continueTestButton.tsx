'use client'

import { continueTest } from "@/app/lib/actions"
import MainButton from "@/app/ui/components/mainButton"
import { useActionState, useEffect } from "react"
import toast from "react-hot-toast"

export default function ContinueTestButton({ testId, email }: { testId: string, email: string }) {

  const continueTestWithEmail = continueTest.bind(null, email);
  const [state, formAction, isPending] = useActionState(continueTestWithEmail, { message: null })

  useEffect(() => {
    if (state.message !== null) toast.error(state.message)
  }, [state])

  useEffect(() => {
    localStorage.setItem('testId', testId)
  }, [testId])

  return (
    <form action={formAction}>
      <button type="submit">
        <MainButton text="Continuar prueba" isLoading={isPending} />
      </button>
    </form>
  )
}
