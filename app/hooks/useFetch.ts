import useSWR from "swr"
import fetcher from "../lib/fetcher"

const useFetch = (url: string) => {
  const { data, error, isLoading, mutate } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  })
  return { data, error, isLoading, mutate }
}
export default useFetch
