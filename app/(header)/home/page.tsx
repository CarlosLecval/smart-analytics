import { auth } from "@/auth";
import { getUserTakenTest } from "@/app/lib/data";
import HomeCard from "./homeCard";

export default async function Home() {
  const session = await auth();
  if (!session?.user) return <>Unauthorized</>
  const userTakenTest = await getUserTakenTest(session.user.email as string);

  return (
    <div className="flex items-center justify-center w-full">
      <HomeCard test={userTakenTest} email={session.user.email as string} />
    </div>
  )
}
