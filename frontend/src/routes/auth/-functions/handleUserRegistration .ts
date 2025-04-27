import { fetchRegisterUser } from "./fetchRegisterUser"

export const handleUserRigistration = async (email: string): Promise<boolean> => {
  const success = await fetchRegisterUser(email)
  if (!success) {
    alert('user registerのfetchの結果がfalsyでした')
    return false
  }
  return true
}
