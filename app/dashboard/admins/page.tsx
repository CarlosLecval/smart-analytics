import Pagination from "@/app/ui/components/pagination";
import Search from "@/app/ui/components/search";
import { sourceSerif } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";

function Table() {
  const invoices = [
    {
      id: 1,
      name: 'Jane Cooper',
      email: 'jane@example.com',
      amount: 120,
      date: '2021-09-10',
      status: 'paid',
      image_url: 'https://randomuser.me/api/portraits'
    },
    {
      id: 2,
      name: 'Jane Cooper',
      email: 'jane@example.com',
      amount: 120,
      date: '2021-09-10',
      status: 'paid',
      image_url: 'https://randomuser.me/api/portraits'
    }
  ]
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.amount}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.date}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.status}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      "Delete"
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

export default function Admins() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${sourceSerif.className} text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search invoices..." />
        <Link
          href="/dashboard/admins/"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <span className="hidden md:block">Add admin</span>{' '}
          <span>+</span>
        </Link>
      </div>
      <Table />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={7} />
      </div>
    </div>
  );
}
