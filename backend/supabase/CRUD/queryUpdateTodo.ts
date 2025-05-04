import { supabase } from "~/backend/supabase/client"
import { UpdateTodoProps } from "supabase/types";

export const queryUpdateTodo = async({ todoId, newContent }: UpdateTodoProps): Promise<boolean> => {
  const { error } = await supabase
   .from("todos")
   .update({ content: newContent })
   .eq('id', todoId)

  if (error) {
    throw new Error('queryUpdateTodo関数: DBへのクエリでエラーが発生しました: ', error)
  }

  return true
}
