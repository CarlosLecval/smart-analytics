import MainButton from "@/app/ui/components/mainButton";
import { UserTakenTest } from "@prisma/client";
import Link from "next/link";

export default function HomeButton({ test, formAction }: { test: UserTakenTest | null, formAction: () => void }) {
  if (test === null)
    return (
      <form action={formAction}>
        <button type="submit">
          <MainButton text="Iniciar prueba" />
        </button>
      </form>
    )
  if (test.endedAt !== null)
    return (
      <Link href="/home">
        <MainButton text="Ver resultados" />
      </Link>
    )
  if (test.startedAt !== null)
    return (
      <Link href="/dpi">
        <MainButton text="Continuar prueba" />
      </Link>
    )
  return (
    <Link href="/dpi/lectura">
      <MainButton text="Continuar lectura" />
    </Link>
  )
}
