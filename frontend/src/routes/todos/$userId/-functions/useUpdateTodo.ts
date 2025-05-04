import { useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchUpdateTodo } from "./fetchUpdateTodo"
import { todoKeys } from "../-key/key"
import { UpdateTodoProps } from "~/backend/supabase/types"

export const useUpdateTodo = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (updateProps: UpdateTodoProps) => fetchUpdateTodo(updateProps),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: todoKeys.all
      })

      alert('更新成功')
    }
  })

  return mutate
}
