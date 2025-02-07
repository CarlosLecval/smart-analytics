import clsx from "clsx";
import Image from "next/image";

export default function DeleteButton({ formAction, isPending }: { formAction: () => void, isPending: boolean }) {
  return (
    <form action={formAction}>
      <button
        type="submit"
        className={clsx("rounded-md border p-2 hover:bg-gray-100", { "animate-pulse": isPending })}
        disabled={isPending}
      >
        <span className="sr-only">Delete</span>
        <Image src="/trash.svg" alt="Trash icon" width={20} height={20} />
      </button>
    </form >
  )
}
