import Breadcrumbs from "@/app/ui/components/breadcrumbs";
import { prisma } from "@/prisma";
import Image from "next/image";

export default async function Page(props: { params: Promise<{ userTakenTestId: string }> }) {
  const userTakenTestId = (await props.params).userTakenTestId;
  //validate and coerce userTakenTestId with Zod
  const userTakenTest = await prisma.userTakenTest.findUnique({
    where: {
      id: Number(userTakenTestId) || -1,
    },
    include: {
      user: true
    }
  })

  if (!userTakenTest) return (
    <>
      <h1>Test no encontrado</h1>
      <p>El test que buscas no existe.</p>
    </>
  )

  return (
    <main>
      <div className="flex items-start justify-between">
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Alumnos', href: '/dashboard/alumnos' },
            {
              label: userTakenTest.user.name as string,
              href: `/dashboard/alumnos/${userTakenTestId}`,
              active: true,
            },
          ]}
        />
        <button className="bg-light-green py-1 px-3 rounded-md">
          <div className="flex items-center">
            <Image src="/file-check-alt.svg" alt="View results icon" width={24} height={24} />
            <span className="text-lg text-smart-green">Ver resultados</span>
          </div>
        </button>
      </div>
    </main >
  )
}
