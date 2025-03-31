import { useSuspenseQuery } from "@tanstack/react-query"
import { todoKeys } from "../-key/key"
import { getTodos } from "./getTodos"

export const useGetTodos = (userId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: todoKeys.getTodos,
    queryFn: () => getTodos(userId),
  })

  return data
}
