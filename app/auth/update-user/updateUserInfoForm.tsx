"use client"

import { useActionState, useEffect } from "react"
import MainButton from "@/app/ui/components/mainButton"
import { z } from "zod"
import { userSchema } from "@/app/lib/schemas"
import toast from "react-hot-toast"
import Loader from "@/app/ui/components/loader"
import { updateUserInfo } from "@/app/lib/actions/userActions"

interface option {
  value: string | number,
  label: string
}

function ComboBox({ label, options, selectedOption }: {
  label: string,
  options: option[],
  selectedOption: option['value'] | null
}) {
  return (
    <label className="flex flex-col">
      <span className="pl-2 text-2xl font-light text-gray-500">{label}</span>
      <select
        defaultValue={selectedOption === null ? undefined : selectedOption}
        name={label}
        className="rounded-lg border-gray-300 border-2 focus:ring-0 focus:border-gray-400"
      >
        {
          options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))
        }
      </select>
    </label >

  )
}

export default function UpdateUserInfoForm({ email, sex, degrees, semesters, selectedOptions }: {
  email: string,
  sex: option[],
  degrees: option[],
  semesters: option[],
  selectedOptions: {
    sex: z.infer<typeof userSchema>['sex'] | null,
    degreeId: number | null,
    semesterId: number | null
  }
}) {
  const updateUserInfoWithEmail = updateUserInfo.bind(null, email)
  const [state, formAction, isPending] = useActionState(updateUserInfoWithEmail, { message: null })

  useEffect(() => {
    if (state.message != null) toast.error(state.message)
  }, [state])

  if (isPending) return <Loader />

  return (
    <form action={formAction} className="flex flex-col gap-4 w-[30%] min-h-40 bg-gray-50 p-4 rounded-xl">
      <ComboBox label="Sexo" options={sex} selectedOption={selectedOptions.sex} />
      <ComboBox label="Carrera" options={degrees} selectedOption={selectedOptions.degreeId} />
      <ComboBox label="Semestre" options={semesters} selectedOption={selectedOptions.semesterId} />
      <div className="pt-9">
        <button type="submit" className="w-full">
          <MainButton text='Guardar' />
        </button>
      </div>
    </form>
  )
}
