'use client';

import { startTest } from "@/app/lib/actions";
import { redirect } from "next/navigation";
import { useActionState, useEffect } from "react";
import { UserTakenTest } from "@prisma/client";
import toast from "react-hot-toast";
import HomeButton from "./homeButton";
import Loader from "@/app/ui/components/loader";

export default function HomeCard({ test, email }: { test: UserTakenTest | null, email: string }) {
  const startTestWithEmail = startTest.bind(null, email);
  const [state, formAction, isPending] = useActionState(startTestWithEmail, { message: null })

  useEffect(() => {
    if (test !== null) localStorage.setItem('testId', test.id.toString())
  }, [test])

  useEffect(() => {
    if (state.message != null) toast.error(state.message)
    if (state.testId !== undefined) {
      localStorage.setItem('testId', state.testId.toString())
      redirect("/dpi/lectura")
    }
  }, [state])

  if (isPending) return <Loader />

  return (
    <div className="max-w-screen-sm min-h-40 bg-gray-50 p-4 rounded-xl">
      <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
      <div className="flex justify-center pt-5">
        <HomeButton test={test} formAction={formAction} />
      </div>
    </div>
  )
}
