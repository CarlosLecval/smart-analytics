import Loader from "@/app/ui/components/loader";

export default function QuestionLoading() {
  return (
    <div className="flex items-center justify-center w-full">
      <Loader />
    </div>
  )
  // return (
  //   <div className="flex items-center justify-center w-full">
  //     <div className="flex flex-col w-4/6 gap-3 h-3/5">
  //       <div className="rounded-full w-full min-h-8 bg-smart-green" />
  //       <div className="bg-light-green py-2 px-3 rounded-md">
  //         <h2 className="font-bold text-smart-green text-lg"></h2>
  //         <p className="font-normal text-smart-green text-base"></p>
  //       </div>
  //       <form className="pl-3 grow">
  //         <h3 className="font-semibold text-2xl pb-2"></h3>
  //         <div className="flex flex-col text-xl pl-4 gap-1">
  //           <p></p>
  //           <p></p>
  //           <p></p>
  //           <p></p>
  //         </div>
  //       </form>
  //       <div className="flex justify-between items-center">
  //         <div>
  //           <span className="flex">
  //             <p className="text-lg text-lighter-green"></p>
  //           </span>
  //         </div>
  //         <form>
  //           <button type="submit">
  //             <div className="text-white bg-smart-green p-2 rounded-lg text-lg"></div>
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // )
}
