import { redirect } from "@tanstack/react-router"
import { getUser } from "~/backend/supabase/auth/getUser"

export const checkSession = async() => {
  const user = await getUser()
  const userId = user?.id

  if (user && userId) {
    throw redirect({
      to: "/todos/$userId",
      params: { userId }
    })
  }
}
