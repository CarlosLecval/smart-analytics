'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { name: 'Home', href: '/dashboard', icon: "estate" },
  {
    name: 'Carreras',
    href: '/dashboard/carreras',
    icon: "university",
  },
  {
    name: 'Admins',
    href: '/dashboard/admins',
    icon: "users-alt",
  },
  {
    name: 'Alumnos',
    href: '/dashboard/alumnos',
    icon: "book-reader",
  },
];

function NavLink({ link, pathname }: { link: typeof links[0], pathname: string }) {
  const [imageSrc, setImageSrc] = useState(`/${link.icon}-${pathname === link.href ? "green" : "black"}.svg`)

  const handleMouseEnter = () => {
    setImageSrc(`/${link.icon}-green.svg`)
  }

  const handleMouseLeave = () => {
    setImageSrc(`/${link.icon}-${pathname === link.href ? "green" : "black"}.svg`)
  }

  return (
    <Link
      key={link.name}
      href={link.href}
      className={clsx(
        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-md font-medium hover:bg-light-green hover:text-smart-green md:flex-none md:justify-start md:p-2 md:px-3',
        {
          'bg-light-green text-smart-green': pathname === link.href,
        },
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={imageSrc}
        alt={link.icon}
        width={22}
        height={22}
      />
      <p className="hidden md:block">{link.name}</p>
    </Link>
  )
}

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link, index) => {
        return (
          <NavLink key={index} link={link} pathname={pathname} />
        );
      })}
    </>
  );
}
