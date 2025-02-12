import EditButton from "@/app/ui/components/editButton"

export default function EditDegreeButton({ id }: { id: number }) {
  return (
    <EditButton href={`/dashboard/carreras/${id}/edit`} />
  )
}
