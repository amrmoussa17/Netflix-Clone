import useSWR from "swr"
import fetcher from "../lib/fetcher"

const useFetch = (url: string) => {
  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  })
  return { data, error, isLoading }
}
export default useFetch
