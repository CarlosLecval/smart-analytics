import EditButton from "@/app/ui/components/editButton"

export default function EditDegreeButton({ id }: { id: string }) {
  return (
    <EditButton href={`/dashboard/carreras/${id}/edit`} />
  )
}
