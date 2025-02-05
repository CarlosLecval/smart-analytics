"use client"

import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 200);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm placeholder:text-gray-500 focus:border-gray-200 focus:ring-0 focus:ring-gray-200 focus:ring-offset-0 focus-visible:ring-gray-200 focus-visible:ring-1 focus-visible:ring-offset-0"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      {/* gray-500 */}
      <Image className="absolute left-3 top-1/4 -transylate-y-1/2" src="/search.svg" alt="Search icon" width={18} height={18} />
    </div>
  );
}
