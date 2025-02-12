"use client"

import { deleteDegree } from "@/app/lib/actions/degreeActions"
import DeleteButton from "@/app/ui/components/deleteButton"
import { useActionState, useEffect } from "react"
import toast from "react-hot-toast"

export default function DeleteDegreeButton({ id }: { id: number }) {
  const deleteDegreeWithId = deleteDegree.bind(null, id)
  const [state, formAction, isPending] = useActionState(deleteDegreeWithId, { success: null })

  useEffect(() => {
    if (state.success === true) toast.success("")
    else if (state.success === false) toast.error(state.message)
  }, [state])

  return (
    <DeleteButton formAction={formAction} isPending={isPending} />
  )
}
