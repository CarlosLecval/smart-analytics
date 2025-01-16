import MainButton from "@/app/ui/components/mainButton";
import Link from "next/link";

export default function TestFinisedButton() {
  return (
    <Link href="/home">
      <MainButton text="Ver resultados" />
    </Link>
  )
}
