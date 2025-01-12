import { prisma } from "@/prisma";

export async function getUserTakenTest(email: string) {
  return await prisma.userTakenTest.findFirst({
    where: {
      user: {
        email: email
      }
    }
  })
}
