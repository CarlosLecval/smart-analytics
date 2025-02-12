"use client"
import createDegree from "@/app/lib/actions/degreeActions";
import FormContainer from "@/app/ui/components/form/formContainer";
import TextInput from "@/app/ui/components/form/textInput";
import { useActionState } from "react";

export default function AddDegreeForm() {
  const [state, formAction, isPending] = useActionState(createDegree, {})

  return (
    <FormContainer
      formAction={formAction}
      isPending={isPending}
      text={"Añadir"}
      cancelHref={"/dashboard/carreras"}
    >
      <TextInput
        defaultValue={state.degree}
        placeholder="Ing. en Inteligencia de Datos"
        icon={{ src: "/university-black.svg", alt: "Degree field icon" }}
        label={"Carrera"}
        errorMessage={state.fieldMessage}
      />
    </FormContainer>
  )
}
