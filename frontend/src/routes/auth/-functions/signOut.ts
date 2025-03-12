import { supabase } from "~/backend/supabase/client"

export const signOut = async(): Promise<boolean> => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    alert('サインアウトエラー')
    console.error(`error: ${error}`)
    return false
  }

  return true
}
