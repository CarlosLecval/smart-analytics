import Image from "next/image";
import { signOut } from "@/auth"

export function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({ redirectTo: "/" })
      }}
    >
      <button type="submit">
        <Image src="/signout.svg" alt="Sign out icon" width={36} height={36} />
      </button>
    </form>
  )
}
