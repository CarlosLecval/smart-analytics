//"use client"

// import { removeAdmin } from "@/app/lib/actions/userActions";
import DeleteButton from "@/app/ui/components/deleteButton";
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

  return (
    <DeleteButton formAction={async () => { "use server" }} isPending={false} />
  )
}
