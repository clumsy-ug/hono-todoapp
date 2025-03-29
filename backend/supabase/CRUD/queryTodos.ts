import { supabase } from "~/backend/supabase/client"
import { Todo } from "~/frontend/src/routes/todos/$userId/-types"

export const queryTodos = async(userId: string): Promise<null | Todo[]> => {
  const { data, error } = await supabase
  .from('todos')
  .select()
  .eq('user_id', userId)

  if (error) {
    console.error(`error: ${error}`)
    throw new Error('Todo一覧取得に失敗')
  }

  if (!data) {
    return null
  }

  return data
}
