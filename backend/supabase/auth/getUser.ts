import { User } from "@supabase/supabase-js"
import { supabase } from "../client"

export const getUser = async(): Promise<User | null> => {
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) return null

  return user
}
