import Image from "next/image";

export default function TextInput({ defaultValue, label, errorMessage, icon, placeholder }: {
  defaultValue: string,
  placeholder: string,
  label: string,
  icon: { src: string, alt: string },
  errorMessage: string
}) {
  const idLabel = label.replace(" ", "-").toLowerCase()
  return (
    <div className="mb-4">
      <label htmlFor="email" className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            id={idLabel}
            name={idLabel}
            type="text"
            placeholder={placeholder}
            defaultValue={defaultValue}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 focus:ring-0 focus:border-gray-400"
            aria-describedby={`${idLabel}-error`}
          />
          <Image className="pointer-events-none absolute left-3 top-1/4 -transylate-y-1/2" src={icon.src} alt={icon.alt} width={18} height={18} />
        </div>
      </div>

      <div id={`${idLabel}-error`} aria-live="polite" aria-atomic="true">
        <p className="mt-2 text-sm text-red-500">
          {errorMessage}
        </p>
      </div>
    </div>
  )
}
