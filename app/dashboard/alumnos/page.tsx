import Pagination from "@/app/ui/components/pagination";
import Search from "@/app/ui/components/search";
import TableSkeleton from "@/app/ui/components/tableSkeleton";
import { sourceSerif } from "@/app/ui/fonts";
import { prisma } from "@/prisma";
import { Suspense } from "react";
import AlumnosTable from "./alumnosTable";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const count = await prisma.user.count({
    where: {
      role: {
        not: "ADMIN"
      }
    },
  });
  const totalPages = Math.ceil(count / 10);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${sourceSerif.className} text-2xl`}>Alumnos</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Busca alumnos..." />
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton headers={["Nombre", "Correo", "Carrera", "Semestre", "Test"]} />}>
        <AlumnosTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div >
  );
}
