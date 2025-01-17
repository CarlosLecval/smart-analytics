import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useUserTakenTest() {
  const { data, error, isLoading } = useSWR(``, fetcher)

  return {
    userTakenTest: data,
    error,
    isLoading
  }
}
