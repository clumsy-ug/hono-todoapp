import { useSuspenseQuery } from "@tanstack/react-query"
import { todoKeys } from "../-key/key"
import { getTodos } from "./getTodos"
import { useParams } from "@tanstack/react-router"

export const useGetTodos = () => {
  const { userId } = useParams({ from: '/todos/$userId/' })
  
  const { data } = useSuspenseQuery({
    queryKey: todoKeys.all,
    queryFn: () => getTodos(userId),
  })

  return data
}
