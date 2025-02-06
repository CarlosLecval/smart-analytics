export default function Table({ headers, children }: { headers: string[] } & Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                {headers.map((header, index) => (
                  <th key={`header-${index}`} scope="col" className="px-3 py-5 font-medium">
                    {header}
                  </th>
                ))}
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {children}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function TableRow({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <tr
      className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
    >
      {children}
    </tr>
  )
}

export function TableCell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <td className="whitespace-nowrap px-3 py-3">
      {children}
    </td>
  )
}
