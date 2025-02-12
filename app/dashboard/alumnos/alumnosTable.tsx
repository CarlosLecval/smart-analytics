import Table, { TableCell, TableRow } from "@/app/ui/components/table";
import { prisma } from "@/prisma";
import DeleteStudentButton from "./components/deleteStudentButton";
import Link from "next/link";
import Image from "next/image";

export default async function AlumnosTable({ query, currentPage }: {
  query: string;
  currentPage: number;
}) {
  const alumnos = await prisma.user.findMany({
    where: {
      role: {
        not: "ADMIN"
      },
      name: {
        contains: query
      }
    },
    include: {
      degree: true,
      semester: true,
      userTest: true
    },
    skip: (currentPage - 1) * 10,
    take: 10
  })

  return (
    <Table headers={["Nombre", "Correo", "Carrera", "Semestre", "Test"]}>
      {alumnos?.map((alumno, index) => (
        <TableRow
          key={`alumno-${index}`}
        >
          <TableCell>
            {alumno.name}
          </TableCell>
          <TableCell>
            {alumno.email}
          </TableCell>
          <TableCell>
            {alumno.degree?.name}
          </TableCell>
          <TableCell>
            {alumno.semester?.number}
          </TableCell>
          <TableCell>
            {alumno.userTest.length === 0 ? (
              <p className="flex items-center justify-center bg-red-100 text-red-600 rounded-full">No aplicado</p>
            ) : alumno.userTest[0].endedAt !== null ? (
              <p className="flex items-center justify-center bg-light-green text-smart-green rounded-full">Aplicado</p>
            ) : (
              <p className="flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-full">En progreso</p>
            )}
          </TableCell>
          <TableCell>
            <div className="flex justify-end gap-3">
              <DeleteStudentButton id={alumno.id} />
              {
                alumno.userTest[0]?.endedAt !== null && alumno.userTest[0]?.endedAt !== undefined &&
                <ResultLink />
              }
            </div>
          </TableCell>
        </TableRow>
      ))
      }
    </Table >
  );
}

function ResultLink() {
  return (
    <Link
      href={"/dashboard"}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <span className="sr-only">View results</span>
      <Image src="/arrow-right-black.svg" alt="Edit icon" width={20} height={20} />
    </Link>
  )
}
