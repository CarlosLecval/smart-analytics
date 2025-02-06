import { prisma } from "@/prisma";
import DeleteAdminButton from "./deleteAdminButton";
import { auth } from "@/auth";
import Table, { TableCell, TableRow } from "@/app/ui/components/table";

export default async function AdminsTable({ query, currentPage }: {
  query: string;
  currentPage: number;
}) {
  const session = await auth();
  if (!session?.user) return <>No user found</>;

  const admins = await prisma.admin.findMany({
    where: {
      email: {
        contains: query
      }
    },
    skip: (currentPage - 1) * 10,
    take: 10
  });

  return (
    <Table headers={["Correo"]}>
      {admins?.map((admin, index) => (
        <TableRow
          key={`admin-${index}`}
        >
          <TableCell>
            {admin.email}
          </TableCell>
          <TableCell>
            <div className="flex justify-end gap-3">
              {admin.email !== session.user.email ? (
                <DeleteAdminButton email={admin.email} />
              ) : (
                <span className="bg-light-green text-smart-green py-1 px-2 rounded-full">Actual</span>
              )}
            </div>
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
