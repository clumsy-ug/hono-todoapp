import { supabase } from "~/backend/supabase/client"
import { SignUpProps } from "../-types"

export const signUp = async({ mailAddress, password }: SignUpProps): Promise<boolean> => {
  const { data, error } = await supabase.auth.signUp({
    email: mailAddress,
    password: password
  })

  if (!data || error) {
    console.error(`data: ${data}`)
    console.error(`error: ${error}`)
    alert('サインアップエラー')
    return false
  }

  return true
}
