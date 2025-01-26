import { sourceSerif } from "../ui/fonts";
import { SignOutButton } from "../ui/components/signOutButton";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex shrink-0 justify-between items-center bg-smart-green text-white ps-5 pe-8 py-3">
        <p className={`${sourceSerif.className} text-4xl`}>Smart analytics</p>
        <SignOutButton />
      </header>
      <div className="flex grow">
        <div className="flex items-center justify-center w-full">
          {children}
        </div>
      </div>
    </div>
  )
}
