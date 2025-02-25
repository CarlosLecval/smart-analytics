import Link from 'next/link';
import { signOut } from '@/auth';
import { sourceSerif } from '../../ui/fonts';
import NavLinks from './navLinks';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-smart-green p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <p className={`${sourceSerif.className} text-4xl`}>Smart analytics</p>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-md font-medium hover:bg-light-green hover:text-smart-green md:flex-none md:justify-start md:p-2 md:px-3">
            <div className="hidden md:block">Cerrar sesión</div>
          </button>
        </form>
      </div>
    </div>
  );
}
