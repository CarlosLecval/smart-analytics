import { auth } from "@/auth";
import { getUserTakenTest } from "@/app/lib/data";
import StartTestButton from "./components/startTestButton";
import TestFinisedButton from "./components/testFinishedButton";
import ContinueTestButton from "./components/continueTestButton";
import ContinueReadingButton from "./components/continueReadingButton";

export default async function Home() {
  const session = await auth();
  if (!session?.user) return <>Unauthorized</>
  const userTakenTest = await getUserTakenTest(session.user.email as string);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="max-w-screen-sm min-h-40 bg-gray-50 p-4 rounded-xl">
        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
        <div className="flex justify-center pt-5">
          {
            userTakenTest === null ? (
              <StartTestButton email={session.user.email as string} />
            ) : userTakenTest.endedAt !== null ? (
              <TestFinisedButton />
            ) : userTakenTest.startedAt !== null ? (
              <ContinueTestButton testId={userTakenTest.id.toString()} email={session.user.email as string} />
            ) : (
              <ContinueReadingButton testId={userTakenTest.id.toString()} />
            )
          }
        </div>
      </div>
    </div>
  )
}
