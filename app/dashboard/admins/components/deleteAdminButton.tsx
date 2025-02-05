"use client"

import { removeAdmin } from "@/app/lib/actions/userActions";
import clsx from "clsx";
import Image from "next/image";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";

export default function DeleteAdminButton({ email }: { email: string }) {
  const removeAdminWithMail = removeAdmin.bind(null, email)
  const [state, formAction, isPending] = useActionState(removeAdminWithMail, { success: null })

  useEffect(() => {
    if (state.success === true) toast.success("")
    else if (state.success === false) toast.error(state.message)
  }, [state])

  return (
    <form action={formAction}>
      <button
        type="submit"
        className={clsx("rounded-md border p-2 hover:bg-gray-100", { "animate-pulse": isPending })}
        disabled={isPending}
      >
        <span className="sr-only">Delete</span>
        <Image src="/trash.svg" alt="Arrow left icon" width={20} height={20} />
      </button>
    </form >
  )
}
