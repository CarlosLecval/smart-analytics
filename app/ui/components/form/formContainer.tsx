import Link from "next/link"
import MainButton from "../mainButton"

export default function FormContainer({ formAction, isPending, text, cancelHref, children }: {
  formAction: (payload: FormData) => void,
  isPending: boolean,
  text: string,
  cancelHref: string
} &
  Readonly<{ children: React.ReactNode }>
) {
  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {children}
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href={cancelHref}
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancelar
          </Link>
          <button type="submit">
            <MainButton text={text} size="sm" className="px-4 h-10" isLoading={isPending} />
          </button>
        </div>
      </div>
    </form>
  )
}
