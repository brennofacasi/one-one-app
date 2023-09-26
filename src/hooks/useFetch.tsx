import useSWR from "swr";
import { clientApi } from "@/services/fetch";

export function useFetch<Data = any, Error = any>(
  url: string | (() => void) | null
) {
  const fetcher = (url: string) => clientApi.get(url).then((res) => res.data);
  const { data, error, isLoading, isValidating, mutate } = useSWR<Data, Error>(
    url,
    fetcher
  );

  return { data, error, isLoading, isValidating, mutate };
}
