import { useSuspenseQuery, } from "@tanstack/react-query"
import { indexKeys } from "./key"
import { getIndex } from "./getIndex"

export const useGetIndex = () => {
  const { data } = useSuspenseQuery({
    queryKey: indexKeys.all,
    queryFn: getIndex,
  })

  return { data }
}
