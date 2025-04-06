import { supabase } from "~/backend/supabase/client"
import { SignInProps } from "~/backend/supabase/types"

export const signIn = async({ mailAddress, password }: SignInProps): Promise<boolean> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: mailAddress,
    password
  })

  if (!data || error) {
    console.error('signIn.tsでエラーだよ')
    console.error(`data: ${data}`)
    console.error(`error: ${error}`)
    return false
  }

  return true
}
