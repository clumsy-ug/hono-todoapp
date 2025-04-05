import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateTodo } from "./updateTodo"
import { todoKeys } from "../-key/key"
import { UpdateTodoProps } from "../-types"

export const useUpdateTodo = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (newTodo: UpdateTodoProps) => updateTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: todoKeys.all
      })
    },
  })

  return mutate
}
