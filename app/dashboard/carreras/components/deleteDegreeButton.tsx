import DeleteButton from "@/app/ui/components/deleteButton"

export default function DeleteDegreeButton() {
  return (
    <DeleteButton formAction={async () => { "use server" }} isPending={false} />
  )
}
