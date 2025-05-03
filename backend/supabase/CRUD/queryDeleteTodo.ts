import { supabase } from "~/backend/supabase/client"

export const queryDeleteTodo = async(todoId: string): Promise<boolean> => {
  const { error } =  await supabase
    .from('todos')
    .delete()
    .eq('id', todoId)

    if (error) {
      throw new Error('queryDeleteTodo: DBへのクエリでエラーが発生しました: ', error)
    }

    return true
}
