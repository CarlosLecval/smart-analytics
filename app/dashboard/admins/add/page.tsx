import Breadcrumbs from "@/app/ui/components/breadcrumbs";
import AddForm from "./add-form";

export default function CreateAdmins() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Admins', href: '/dashboard/admins' },
          {
            label: 'Añadir admin',
            href: '/dashboard/admins/add',
            active: true,
          },
        ]}
      />
      <AddForm />
    </main>
  )
}
