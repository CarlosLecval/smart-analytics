import Image from "next/image";
import { sourceSerif } from "./ui/fonts";
import Link from "next/link";

export default function Root() {
  return (
    <main className="p-6 flex flex-col min-h-screen gap-4">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-smart-green p-4 md:h-52">
        <p className={`${sourceSerif.className} text-4xl text-white`}>Smart analytics</p>
      </div>
      <div className="flex grow">
        <div className="flex flex-col gap-3 justify-center w-1/3 bg-gray-50 px-6 rounded-lg">
          <p className="text-2xl">¡Realiza tu Diagnóstico de Perfil Individual!</p>
          <Link
            href="/home"
            className="max-w-fit px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 bg-white"
          >
            <Image width={24} height={24} src="/google-color.svg" alt="google logo" />
            <span>Login with Google</span>
          </Link>
        </div>
        <div className="w-2/3 flex items-center justify-center">
          <div className="w-[580] h-[330] bg-gray-500 rounded-lg" />
        </div>
      </div>
    </main>
  );
}
