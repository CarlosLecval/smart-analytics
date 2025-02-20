"use client"

import { deleteUser } from "@/app/lib/actions/userActions";
import clsx from "clsx";
import Image from "next/image";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function DeleteStudentButton({ id }: { id: string }) {
  const [showModal, setShowModal] = useState(false)
  const deleteStudentWithId = deleteUser.bind(null, id);
  const [state, formAction, isPending] = useActionState(deleteStudentWithId, { success: null })

  useEffect(() => {
    if (state.success === true) {
      setShowModal(false)
      toast.success("")
    }
    else if (state.success === false) toast.error(state.message)
  }, [state])

  return (
    <>
      <button
        className="rounded-md border p-2 hover:bg-gray-100"
        onClick={() => setShowModal(true)}
      >
        <span className="sr-only">Delete</span>
        <Image src="/trash.svg" alt="Trash icon" width={20} height={20} />
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-lg font-bold">Confirmar</h2>
            <p className="mt-2">¿Estás seguro que quieres borrar a este usuario?</p>
            <div className="mt-4 flex justify-end">
              <form action={formAction}>
                <button type="submit"
                  className={clsx("px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 mr-2", { "animate-pulse": isPending })}
                  disabled={isPending}
                >
                  Sí, eliminar
                </button>
              </form>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
