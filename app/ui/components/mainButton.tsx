import clsx from "clsx";

export default function MainButton({
  text, isLoading = false, size = "lg", className
}: {
  text: string,
  isLoading?: boolean,
  size?: "sm" | "lg",
  className?: string | undefined
}) {
  return (
    <div
      className={
        clsx(
          ` flex items-center justify-center text-white bg-smart-green p-2 rounded-lg text-${size} ${className}`,
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
