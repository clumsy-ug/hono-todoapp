import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { authKeys } from "../-key/key"
import { AuthProps } from "../-types"
import { signUp } from "./signUp"
import { fetchRegisterUser } from "./fetchRegisterUser"

export const useSignUp = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: (credentials: AuthProps) => signUp(credentials),
    onSuccess: async (user) => {
      if (!user || !user.email) {
        alert('サインアップの結果、userもしくはuserのemailが取得できませんでした')
        console.error("user: ", user)
        console.error("user.email: ", user?.email)
        return
      }

      const success = await fetchRegisterUser(user.email)
      if (!success) {
        alert('user registerのfetchの結果がfalsyでした')
      }

      queryClient.setQueryData(authKeys.signUp, user.id)
      alert('サインアップ成功')
      navigate({ to: `/todos/${user.id}` }) 
    }
  })

  return mutate as (credentials: AuthProps) => void
}
