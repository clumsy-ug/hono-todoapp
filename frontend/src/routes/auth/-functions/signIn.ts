import { supabase } from "~/backend/supabase/client"
import { SignInProps } from "~/backend/supabase/types"

export const signIn = async({ mailAddress, password }: SignInProps): Promise<boolean | string> => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: mailAddress,
    password
  })

  if (error) {
    console.error(error)
    throw new Error('sign-inでエラー')
  }

  if (!data) {
    console.error('signIn.tsでdataが無いよ')
    console.error(`data: ${data}`)
    console.error(`error: ${error}`)
    return false
  }

  return data.user.id
}
