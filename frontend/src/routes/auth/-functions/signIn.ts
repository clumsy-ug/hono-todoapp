import { supabase } from "~/backend/supabase/client"
import { SignInProps } from "../-types"

export const signIn = async({ mailAddress, password }: SignInProps): Promise<boolean> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: mailAddress,
    password
  })

  if (!data || error) {
    console.error(`data: ${data}`)
    console.error(`error: ${error}`)
    alert('ログインエラー')
    return false
  }

  return true
}
