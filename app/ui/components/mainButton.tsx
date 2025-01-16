import clsx from "clsx";

export default function MainButton({ text, isLoading = false }: { text: string, isLoading?: boolean }) {
  return (
    <div
      className={
        clsx(
          "text-white bg-smart-green p-2 rounded-lg text-lg",
          {
            "animate-pulse": isLoading
          }
        )
      }
    >
      {isLoading ? "Cargando..." : text}
    </div>
  )
}
