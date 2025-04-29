import { supabase } from "~/backend/supabase/client"
import { RegisterUserProps } from "supabase/types"

export const registerUser = async({ userId, email }: RegisterUserProps): Promise<boolean> => {
  const { error } = await supabase
  .from('users')
  .insert({ id: userId, email })

  if (error) {
    throw new Error('registerUser関数: DBへのクエリでエラーが発生しました: ', error)
  }

  return true
}
