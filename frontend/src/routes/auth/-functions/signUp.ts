import { supabase } from "~/backend/supabase/client"
import { SignUpProps } from "../-types"

export const signUp = async({ mailAddress, password }: SignUpProps): Promise<boolean | string> => {
  const { data, error } = await supabase.auth.signUp({
    email: mailAddress,
    password: password
  })

  if (error) {
    console.error(error)
    throw new Error('sign-upでエラー')
  }

  if (!data || !data.user) {
    console.error('signUp.tsでdataもしくはdata.userが無いよ')
    console.error(`data: ${data}`)
    console.error(`data.user: ${data.user}`)
    console.error(`error: ${error}`)
    return false
  }

  return data.user.id
}
