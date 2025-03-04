// import { redirect } from "@tanstack/react-router"
// import { getSession } from "~/../../clientSupabase/supabase/auth/getSession"

// export const checkSession = async () => {
//   const isLoggedIn = await getSession()
//   if (isLoggedIn) {
//     throw redirect({ to: '/home' })
//   }
// }

import { redirect } from "@tanstack/react-router"
// import { getUser } from "~/backend/supabase/auth/getUser"
import { getUser } from '../../../../../backend/supabase/auth/getUser'

export const checkSession = async() => {
  const user = await getUser()

  if (user) {
    throw redirect({ to: '/todos' })
  }
}
