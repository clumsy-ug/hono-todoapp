import { redirect } from "@tanstack/react-router"
import { getUser } from "~/backend/supabase/auth/getUser"

export const checkSession = async() => {
  const user = await getUser()

  if (user) {
    throw redirect({ to: '/todos' })
  }
}
