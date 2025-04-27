import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { authKeys } from "../-key/key"
import { AuthProps } from "../-types"
import { signUp } from "./signUp"

export const useSignUp = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: (credentials: AuthProps) => signUp(credentials),
    onSuccess: (userId) => {
      if (!userId) {
        alert('サインアップの結果、userIdが取得できませんでした')
        return
      }

      queryClient.setQueryData(authKeys.signUp, userId)
      alert('サインアップ成功')
      navigate({ to: `/todos/${userId}` }) 
    }
  })

  return mutate as (credentials: AuthProps) => void
}
