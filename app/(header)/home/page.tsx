import MainButton from "@/app/ui/components/mainButton";
import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth()

  return (
    <div className="flex items-center justify-center w-full">
      <div className="max-w-screen-sm min-h-40 bg-gray-50 p-4 rounded-xl">
        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
        <div className="flex justify-center pt-5">
          <Link href="/dpi">
            <MainButton text="Iniciar prueba" />
          </Link>
        </div>
      </div>
    </div>
  )
}
