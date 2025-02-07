import Pagination from "@/app/ui/components/pagination";
import Search from "@/app/ui/components/search";
import { sourceSerif } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/prisma";
import { Suspense } from "react";
import TableSkeleton from "@/app/ui/components/tableSkeleton";
import DegreesTable from "./degreesTable";

export default async function Degrees(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const count = await prisma.degree.count({
    where: {
      name: {
        contains: query,
      },
    },
  });
  const totalPages = Math.ceil(count / 10);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${sourceSerif.className} text-2xl`}>Carreras</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Busca carreras..." />
        <Link
          href="/dashboard/carreras/add"
          className="flex h-10 items-center rounded-lg bg-smart-green px-4 text-sm font-medium text-white transition-colors hover:bg-smart-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smart-green"
        >
          <span className="hidden md:block pr-1">Añadir carrera</span>
          <Image src="/plus.svg" alt="plus icon" width={16} height={16} />
        </Link>
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton headers={["Carrera"]} />}>
        <DegreesTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div >
  );
}
