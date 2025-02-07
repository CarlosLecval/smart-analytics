"use client"

import { updateDegree } from "@/app/lib/actions/degreeActions";
import FormContainer from "@/app/ui/components/form/formContainer";
import TextInput from "@/app/ui/components/form/textInput";
import { Degree } from "@prisma/client";
import { useActionState } from "react";

export default function EditDegreeForm({ degree }: { degree: Degree }) {
  const updateDegreeWithId = updateDegree.bind(null, degree.id)
  const [state, formAction, isPending] = useActionState(updateDegreeWithId, {})

  return (
    <FormContainer
      formAction={formAction}
      isPending={isPending}
      text={"Editar"}
      cancelHref={"/dashboard/carreras"}
    >
      <TextInput
        defaultValue={degree.name}
        placeholder="Ing. en Inteligencia de Datos"
        icon={{ src: "/university-black.svg", alt: "Degree field icon" }}
        label={"Carrera"}
        errorMessage={state.fieldMessage}
      />
    </FormContainer>
  )

}
