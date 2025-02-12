import Breadcrumbs from "@/app/ui/components/breadcrumbs";
import AddDegreeForm from "./add-form";

export default function AddDegreePage() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Carreras', href: '/dashboard/carreras' },
          {
            label: 'Añadir carrera',
            href: '/dashboard/carreras/add',
            active: true,
          },
        ]}
      />
      <AddDegreeForm />
    </main>
  )
}
