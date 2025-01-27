import { auth } from '@/auth'
import { getUserTakenTest } from "@/app/lib/data";

export async function GET(
  _req: Request,
) {
  const session = await auth()
  if (!session?.user) return Response.json({ redirect: "/" }, { status: 403 })
  const userTakenTest = await getUserTakenTest(session.user.email as string);
  if (userTakenTest === null || userTakenTest.endedAt !== null) return Response.json({ redirect: "/home" }, { status: 403 })
  if (userTakenTest.startedAt === null) return Response.json({ redirect: "/dpi/lectura" }, { status: 403 })
  return Response.json({ userTakenTest: userTakenTest.id })
}
