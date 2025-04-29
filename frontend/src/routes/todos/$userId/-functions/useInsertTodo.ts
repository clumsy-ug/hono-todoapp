import { useMutation, useQueryClient } from "@tanstack/react-query"
import { insertTodo } from "./insertTodo"
import { todoKeys } from "../-key/key"
import { InsertTodoProps } from "../-types"

export const useInsertTodo = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (newTodo: InsertTodoProps) => insertTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: todoKeys.all
      })
    },
  })

  return mutate
}
