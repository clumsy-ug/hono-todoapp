import { useSuspenseQuery } from "@tanstack/react-query"
import { signIn } from "~/frontend/src/routes/auth/-functions/signIn"
import { authKeys } from "~/frontend/src/routes/auth/-key/key"
import { SignInProps } from "~/frontend/src/routes/auth/-types"

export default function useFetchTest({ mailAddress, password }: SignInProps) {
  const { data } = useSuspenseQuery({
    queryKey: authKeys.signIn,
    queryFn: () => signIn({ mailAddress, password })
  })

  return data
}
