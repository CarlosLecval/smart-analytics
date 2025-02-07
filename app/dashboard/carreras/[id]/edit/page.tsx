import Breadcrumbs from "@/app/ui/components/breadcrumbs";
import EditDegreeForm from "./edit-form";
import { prisma } from "@/prisma";

export default async function EditDegreePage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const degree = await prisma.degree.findUnique({ where: { id: Number(id) } });
  if (!degree) return <>No se encontró la carrera</>;
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Carreras', href: '/dashboard/carreras' },
          {
            label: 'Editar carrera',
            href: `/dashboard/carreras/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditDegreeForm degree={degree} />
    </main>
  )
}
