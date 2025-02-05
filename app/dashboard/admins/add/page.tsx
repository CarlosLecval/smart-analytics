import Breadcrumbs from "@/app/ui/components/breadcrumbs";
import MainButton from "@/app/ui/components/mainButton";
import Link from "next/link";

export default function CreateAdmins() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Admins', href: '/dashboard/admins' },
          {
            label: 'Añadir admin',
            href: '/dashboard/admins/add',
            active: true,
          },
        ]}
      />
      <form>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Correo
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="correo@up.edu.mx"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  aria-describedby="email-error"
                />
                {/* <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
              </div>
            </div>

            <div id="email-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                Hola
              </p>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <Link
              href="/dashboard/admins"
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              Cancel
            </Link>
            <button type="submit">
              <MainButton text="Añadir"></MainButton>
            </button>
          </div>
        </div>
      </form>
    </main>
  )
}
