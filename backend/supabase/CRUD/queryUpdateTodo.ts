import { supabase } from "~/backend/supabase/client"
import { UpdateTodoProps } from "~/frontend/src/routes/todos/$userId/-types"

export const queryUpdateTodo = async(newTodo: UpdateTodoProps): Promise<boolean> => {
  const { error } = await supabase
  .from('todos')
  .insert(newTodo)

  if (error) {
    throw new Error('DBへのクエリでエラーが発生しました')
  }

  return true
}
