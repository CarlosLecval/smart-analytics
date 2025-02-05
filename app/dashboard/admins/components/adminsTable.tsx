import { prisma } from "@/prisma";
import DeleteAdminButton from "./deleteAdminButton";
import { auth } from "@/auth";

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
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Correo
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {admins?.map((admin, index) => (
                <tr
                  key={`admin-${index}`}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {admin.email}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {admin.email !== session.user.email ? (
                        <DeleteAdminButton email={admin.email} />
                      ) : (
                        <span className="bg-light-green text-smart-green py-1 px-2 rounded-full">Actual</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
