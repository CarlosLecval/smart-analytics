'use client'

import MainButton from "@/app/ui/components/mainButton"
import Link from "next/link"

export default function ContinueReadingButton() {

  return (
    <Link href="/dpi/lectura">
      <MainButton text="Continuar lectura" />
    </Link>
  )
}
