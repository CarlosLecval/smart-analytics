import Table, { TableCell, TableRow } from "@/app/ui/components/table";
import { prisma } from "@/prisma";
import DeleteDegreeButton from "./components/deleteDegreeButton";

export default async function DegreesTable({ query, currentPage }: {
  query: string;
  currentPage: number;
}) {
  const degrees = await prisma.degree.findMany({
    where: {
      name: {
        contains: query
      }
    },
    skip: (currentPage - 1) * 10,
    take: 10
  });

  return (
    <Table headers={["Carrera"]}>
      {degrees?.map((degree, index) => (
        <TableRow
          key={`admin-${index}`}
        >
          <TableCell>
            {degree.name}
          </TableCell>
          <TableCell>
            <div className="flex justify-end gap-3">
              <DeleteDegreeButton />
            </div>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
