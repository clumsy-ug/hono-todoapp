import { SignInProps } from "../-types"
import { SignInResponse } from "../-types"

export const fetchSignIn = async({ mailAddress, password }: SignInProps): Promise<SignInResponse> => {
  const res = await fetch("http://localhost:5001/api/signin", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      mailAddress,
      password
    })
  })

  const result = await res.json()

  if (!res.ok) {
    throw new Error('signInに失敗しました')
  }

  if (result.status === 'failed') {
    throw new Error(result.message)
  }

  return result
}
