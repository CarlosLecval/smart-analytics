export function SelectionQuestion({ value, label }: { value: string, label: string }) {
  return (
    <label className="flex items-center">
      <input type="checkbox" value={value} name="contact"
        className="rounded border-gray-500 border-2 text-gray-500 focus:ring-0 focus:ring-gray-500 focus:ring-offset-0 focus-visible:ring-gray-500 focus-visible:ring-1 focus-visible:ring-offset-1" />
      <span className="pl-1">{label}</span>
    </label>
  )
}
