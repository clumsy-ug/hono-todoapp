import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { authKeys } from "../-key/key"
import { fetchSignIn } from "./fetchSignIn"
import { fetchUserId } from "./fetchUserId"
import { AuthProps } from "../-types"

export const useSignIn = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: (credentials: AuthProps) => fetchSignIn(credentials),
    onSuccess: async (data) => {
      queryClient.setQueryData(authKeys.signIn, data);

      const userId = await fetchUserId()
      if (!userId) return
      
      queryClient.setQueryData(authKeys.userId, userId);

      alert('ログイン成功')
      navigate({ to: `/todos/${userId}` }) 
    }
  })

  return mutate as (credentials: AuthProps) => void
}
