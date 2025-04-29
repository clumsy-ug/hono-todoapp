import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "@tanstack/react-router"
import { authKeys } from "../-key/key"
import { AuthProps } from "../-types"
import { signUp } from "./signUp"
import { isValidUser } from "./isValidUser"
import { handleUserRigistration } from "./handleUserRegistration "

export const useSignUp = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationFn: (credentials: AuthProps) => signUp(credentials),
    onSuccess: async (user) => {
      if (!isValidUser(user) || !user?.email) return

      const registrationSuccess = await handleUserRigistration(user.id, user.email)
      if (!registrationSuccess) return

      queryClient.setQueryData(authKeys.signUp, user.id)
      alert('サインアップ成功')
      navigate({ to: `/todos/${user.id}` })
    }
  })

  return mutate as (credentials: AuthProps) => void
}
