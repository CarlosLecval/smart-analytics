export function OptionQuestion({ label, value }: { label: string, value: string }) {
  return (
    <label className="flex items-center">
      <input type="radio" value={value} name="question"
        className="border-gray-500 border-2 text-gray-500 focus:ring-0 focus:ring-gray-500 focus:ring-offset-0 focus-visible:ring-gray-500 focus-visible:ring-1 focus-visible:ring-offset-1" />
      <span className="pl-1">{label}</span>
    </label>
  )
}
