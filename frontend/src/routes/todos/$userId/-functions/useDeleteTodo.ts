import { useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchDeleteTodo } from "./fetchDeleteTodo"
import { todoKeys } from "../-key/key"

export const useDeleteTodo = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (todoId: string) => fetchDeleteTodo(todoId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: todoKeys.all
      })
    }
  })

  return mutate
}
