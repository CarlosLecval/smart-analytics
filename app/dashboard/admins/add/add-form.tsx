"use client"

import FormContainer from "@/app/ui/components/form/formContainer";
import TextInput from "@/app/ui/components/form/textInput";
import { addAdmin } from "@/app/lib/actions/userActions";
import { useActionState } from "react";

export default function AddForm() {
  const [state, formAction, isPending] = useActionState(addAdmin, {})
  return (
    <FormContainer
      formAction={formAction}
      isPending={isPending}
      text={"Añadir"}
      cancelHref={"/dashboard/admins"}
    >
      <TextInput
        defaultValue={state.email ?? ""}
        placeholder="correo@up.edu.mx"
        icon={{ src: "/envelope.svg", alt: "Envelope icon" }}
        label={"Correo"}
        errorMessage={""}
      />
    </FormContainer>
  )
}
