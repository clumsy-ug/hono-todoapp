import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { authKeys } from "../-key/key"
import { AuthProps } from "../-types"
import { signIn } from "./signIn"

export const useSignIn = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: (credentials: AuthProps) => signIn(credentials),
    onSuccess: (userId) => {
      if (!userId) {
        alert('サインインの結果、userIdが取得できませんでした')
        return
      }

      queryClient.setQueryData(authKeys.signIn, userId)
      alert('ログイン成功')
      navigate({ to: `/todos/${userId}` }) 
    }
  })

  return mutate as (credentials: AuthProps) => void
}
