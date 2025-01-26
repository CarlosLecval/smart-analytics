export default function TextQuestion() {
  return (
    <div className="pr-4 w-full pt-2">
      <textarea
        name="question"
        className="rounded-md w-full border-gray-400 focus:ring-0 focus:border-gray-400 resize-none"
        rows={4}
      />
    </div>
  )
}
