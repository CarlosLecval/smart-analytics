import { auth } from '@/auth'
import { getUserTakenTest } from "@/app/lib/data";

export async function GET(
  _req: Request,
) {
  const session = await auth()
  if (!session?.user) return Response.json({ redirect: "/" })
  const userTakenTest = await getUserTakenTest(session.user.email as string);
  if (userTakenTest === null || userTakenTest.endedAt !== null) return Response.json({ redirect: "/home" })
  if (userTakenTest.startedAt === null) return Response.json({ redirect: "/dpi/lectura" })
  return Response.json({ canAccess: true })
}
