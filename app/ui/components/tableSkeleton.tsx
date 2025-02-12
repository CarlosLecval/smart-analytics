import Table from "./table";

export function TableRowSkeleton({ numOfFields }: { numOfFields: number }) {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {Array.from({ length: numOfFields }).map((_, index) => (
        <td key={`skeleton-${index}`} className="whitespace-nowrap px-3 py-3">
          <div className="h-6 w-32 rounded bg-gray-100"></div>
        </td>
      ))}
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="h-[38px] w-[38px] rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}

export default function TableSkeleton({ headers }: { headers: string[] }) {
  return (
    <Table headers={headers}>
      <TableRowSkeleton numOfFields={headers.length} />
      <TableRowSkeleton numOfFields={headers.length} />
      <TableRowSkeleton numOfFields={headers.length} />
      <TableRowSkeleton numOfFields={headers.length} />
    </Table>
  );
}
