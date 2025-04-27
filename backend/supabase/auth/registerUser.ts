import { supabase } from "~/backend/supabase/client"

export const registerUser = async(email: string): Promise<boolean> => {
  const { error } = await supabase
  .from('users')
  .insert({ email })

  if (error) {
    throw new Error('registerUser関数: DBへのクエリでエラーが発生しました: ', error)
  }

  return true
}
