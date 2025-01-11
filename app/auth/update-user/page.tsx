import { auth } from "@/auth";
import { prisma } from "@/prisma";
import UpdateUserInfoForm from "./updateUserInfoForm";
import { redirect } from "next/navigation";
import { User } from "next-auth";

export default async function NewUser() {
  const session = await auth()
  const user = session?.user as User

  const selectedOptions = await prisma.user.findUnique({
    where: {
      email: user.email!
    },
    select: {
      sex: true,
      degreeId: true,
      semesterId: true
    }
  })

  //TODO: Throw error
  if (selectedOptions == null) return redirect('/')

  const sexOptions = [{ value: 'MALE', label: 'Masculino' }, { value: 'FEMALE', label: 'Femenino' }, { value: 'OTHER', label: 'Prefiero no decirlo' }];
  const [degrees, semesters] = await Promise.all([
    prisma.degree.findMany(),
    prisma.semester.findMany()
  ])


  return (
    <div className="h-dvh flex items-center justify-center w-full">
      <UpdateUserInfoForm
        email={user.email!}
        sex={sexOptions}
        degrees={degrees.map(degree => {
          return {
            value: degree.id,
            label: degree.name
          }
        })}
        semesters={semesters.map(semester => {
          return {
            value: semester.id,
            label: semester.number
          }
        })}
        selectedOptions={selectedOptions}
      />
    </div>
  )
}
