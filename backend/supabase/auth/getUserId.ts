import { supabase } from "~/backend/supabase/client"

export const getUserId = async(): Promise<boolean | string> => {
  const { data, error } = await supabase.auth.getUser()
  
  if (!data || error) {
    console.error('getUserId.tsでエラー!')
    console.error(`data: ${data}`)
    console.error(`error: ${error}`)
    return false
  }

  const userId = data.user.id
  if (userId) {
    return userId 
  } else {
    return false
  }
}
