import FormContainer from "@/app/ui/components/form/formContainer";
import TextInput from "@/app/ui/components/form/textInput";
import { Degree } from "@prisma/client";

export default function EditDegreeForm({ degree }: { degree: Degree }) {
  return (
    <FormContainer
      formAction={async () => { "use server" }}
      isPending={false}
      text={"Editar"}
      cancelHref={"/dashboard/carreras"}
    >
      <TextInput
        defaultValue={degree.name}
        placeholder="Ing. en Inteligencia de Datos"
        icon={{ src: "/university-black.svg", alt: "Degree field icon" }}
        label={"Carrera"}
        errorMessage={""}
      />
    </FormContainer>
  )

}
