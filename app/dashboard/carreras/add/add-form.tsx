import FormContainer from "@/app/ui/components/form/formContainer";
import TextInput from "@/app/ui/components/form/textInput";

export default function AddDegreeForm() {
  return (
    <FormContainer
      formAction={async () => { "use server" }}
      isPending={false}
      text={"Añadir"}
      cancelHref={"/dashboard/carreras"}
    >
      <TextInput
        defaultValue=""
        placeholder="Ing. en Inteligencia de Datos"
        icon={{ src: "/university-black.svg", alt: "Degree field icon" }}
        label={"Carrera"}
        errorMessage={""}
      />
    </FormContainer>
  )
}
