'use client';

import { signInAction } from "@/app/lib/actions/userActions";
import Image from "next/image"
import { useSearchParams } from "next/navigation";

export default function SignInWithGoogle() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl")
  const signInWithCallback = signInAction.bind(null, callbackUrl)

  return (
    <form action={signInWithCallback}>
      <button type="submit" className="max-w-fit px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 bg-white">
        <Image width={24} height={24} src="/google-color.svg" alt="google logo" />
        <span>Inicia sesión con Google</span>
      </button>
    </form>
  )
} 
