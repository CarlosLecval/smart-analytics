import Image from "next/image";

export default function Search({ placeholder }: { placeholder: string }) {

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm placeholder:text-gray-500 focus:border-gray-200 focus:ring-0 focus:ring-gray-200 focus:ring-offset-0 focus-visible:ring-gray-200 focus-visible:ring-1 focus-visible:ring-offset-0"
        placeholder={placeholder}
      />
      <Image className="absolute left-3 top-1/4 -transylate-y-1/2" src="/search.svg" alt="Search icon" width={18} height={18} />
    </div>
  );
}
