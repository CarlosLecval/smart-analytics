import Loader from "@/app/ui/components/loader";

export default function QuestionLoading() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col w-4/6 gap-3 h-3/5 animate-pulse">
        <div className="rounded-full w-full min-h-8 bg-gray-200" />
        <div className="bg-gray-200 py-2 rounded-md h-14" />
        <div className="pl-3 grow pt-2">
          <div className="rounded-md h-8 w-1/2 bg-gray-200" />
          <div className="flex flex-col text-xl pl-4 pt-4 gap-3 w-1/4">
            <div className="rounded-md bg-gray-200 h-5" />
            <div className="rounded-md bg-gray-200 h-5" />
            <div className="rounded-md bg-gray-200 h-5" />
            <div className="rounded-md bg-gray-200 h-5" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="rounded-sm bg-gray-100 h-5 w-40" />
          <div className="rounded-lg h-12 w-24 bg-gray-200" />
        </div>
      </div>
    </div>
  )
}
