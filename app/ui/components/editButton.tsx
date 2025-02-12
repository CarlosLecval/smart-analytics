import Image from "next/image";
import Link from "next/link";

export default function EditLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <span className="sr-only">Edit</span>
      <Image src="/pen.svg" alt="Edit icon" width={20} height={20} />
    </Link>
  )
}
