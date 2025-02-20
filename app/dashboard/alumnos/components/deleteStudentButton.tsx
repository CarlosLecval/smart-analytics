//"use client"

// import { removeAdmin } from "@/app/lib/actions/userActions";
import DeleteButton from "@/app/ui/components/deleteButton";
import Image from "next/image";
// import { useActionState, useEffect } from "react";
// import toast from "react-hot-toast";

export default function DeleteStudentButton({ id }: { id: string }) {
  // const removeAdminWithMail = removeAdmin.bind(null, email)
  // const [state, formAction, isPending] = useActionState(removeAdminWithMail, { success: null })
  //
  // useEffect(() => {
  //   if (state.success === true) toast.success("")
  //   else if (state.success === false) toast.error(state.message)
  // }, [state])

  // return (
  //   <DeleteButton formAction={async () => { "use server" }} isPending={false} />
  // )
  //
  return (
    <>
      <button
        type="submit"
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <span className="sr-only">Delete</span>
        <Image src="/trash.svg" alt="Trash icon" width={20} height={20} />
      </button>
      <div className="relative">
        Hola
      </div>
    </>
  )
}
