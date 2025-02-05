'use client'

import { continueTest } from "@/app/lib/actions/testActions"
import MainButton from "@/app/ui/components/mainButton"
import { useActionState, useEffect } from "react"
import toast from "react-hot-toast"

export default function ContinueTestButton({ email }: { email: string }) {

  const continueTestWithEmail = continueTest.bind(null, email);
  const [state, formAction, isPending] = useActionState(continueTestWithEmail, { message: null })

  useEffect(() => {
    if (state.message !== null) toast.error(state.message)
  }, [state])

  return (
    <form action={formAction}>
      <button type="submit">
        <MainButton text="Continuar prueba" isLoading={isPending} />
      </button>
    </form>
  )
}
