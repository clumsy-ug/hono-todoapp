import { fetchRegisterUser } from "./fetchRegisterUser"

export const handleUserRigistration = async (userId: string, email: string): Promise<boolean> => {
  const success = await fetchRegisterUser(userId, email)
  if (!success) {
    alert('user registerのfetchの結果がfalsyでした')
    return false
  }
  return true
}
