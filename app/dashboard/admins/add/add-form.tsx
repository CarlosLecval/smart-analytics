"use client"

import { addAdmin } from "@/app/lib/actions/userActions";
import MainButton from "@/app/ui/components/mainButton";
import Image from "next/image";
import Link from "next/link";
import { useActionState } from "react";

export default function AddForm() {
  const [state, formAction, isPending] = useActionState(addAdmin, {})
  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Correo
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="text"
                placeholder="correo@up.edu.mx"
                defaultValue={state.email}
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 focus:ring-0 focus:border-gray-400"
                aria-describedby="email-error"
              />
              <Image className="pointer-events-none absolute left-3 top-1/4 -transylate-y-1/2" src="/envelope.svg" alt="Envelope icon" width={18} height={18} />
            </div>
          </div>

          <div id="email-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state.fieldMessage}
            </p>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/admins"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancelar
          </Link>
          <button type="submit">
            <MainButton text="Añadir" size="sm" className="px-4 h-10" isLoading={isPending} />
          </button>
        </div>
      </div>
    </form>
  )
}
