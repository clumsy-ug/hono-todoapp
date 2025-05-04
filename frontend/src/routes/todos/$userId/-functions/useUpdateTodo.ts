import { useMutation, useQueryClient } from "@tanstack/react-query"
import { fetchUpdateTodo } from "./fetchUpdateTodo"
import { todoKeys } from "../-key/key"
import { UpdateTodoProps } from "~/backend/supabase/types"
import { Todo } from "../-types"

export const useUpdateTodo = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (updateProps: UpdateTodoProps) => fetchUpdateTodo(updateProps),
    onSuccess: (_, variables) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(todoKeys.all)
      if (!previousTodos) return

      const updatedTodos = previousTodos.map(todo => 
        todo.id === variables.todoId ? { ...todo, content: variables.newContent } : todo
      )

      queryClient.setQueryData(todoKeys.all, updatedTodos)

      alert('更新成功')
    }
  })

  return mutate
}
