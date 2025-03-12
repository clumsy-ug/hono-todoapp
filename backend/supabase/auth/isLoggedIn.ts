import { getUser } from "./getUser"

export const isLoggedIn = async(): Promise<boolean> => {
  const user = await getUser()

  if (!user) {
    return false
  }

  return true
}
