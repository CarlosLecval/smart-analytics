'use client'

import MainButton from "@/app/ui/components/mainButton"
import Link from "next/link"
import { useEffect } from "react"

export default function ContinueReadingButton({ testId }: { testId: string }) {

  useEffect(() => {
    localStorage.setItem('testId', testId)
  }, [testId])

  return (
    <Link href="/dpi/lectura">
      <MainButton text="Continuar lectura" />
    </Link>
  )
}
