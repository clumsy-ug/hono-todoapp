import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { authKeys } from "../-key/key"
import { AuthProps } from "../-types"
import { signIn } from "./signIn"
import { isValidUserId } from "./isValidUserId"

export const useSignIn = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: (credentials: AuthProps) => signIn(credentials),
    onSuccess: (userId) => {
      if (!isValidUserId(userId)) return

      queryClient.setQueryData(authKeys.signIn, userId)
      navigate({ to: `/todos/${userId}` }) 
    }
  })

  return mutate as (credentials: AuthProps) => void
}
