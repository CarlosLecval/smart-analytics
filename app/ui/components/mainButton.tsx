interface props {
  text: string
}

export default function MainButton({ text }: props) {
  return (
    <div className="text-white bg-smart-green p-2 rounded-lg text-lg">
      {text}
    </div>
  )
}
