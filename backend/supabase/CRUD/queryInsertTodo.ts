import { supabase } from "~/backend/supabase/client"
import { InsertTodoProps } from "~/frontend/src/routes/todos/$userId/-types"

export const queryInsertTodo = async(newTodo: InsertTodoProps): Promise<boolean> => {
  const { error } = await supabase
  .from('todos')
  .insert(newTodo)

  if (error) {
    throw new Error('queryInsertTodo: DBへのクエリでエラーが発生しました: ', error)
  }

  return true
}
