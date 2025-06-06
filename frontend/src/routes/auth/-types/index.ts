export type AuthProps = {
  mailAddress: string
  password: string
}

export type SignUpProps = AuthProps
export type SignInProps = AuthProps

export interface SignInResponse {
  status: string
  message: string
  mailAddress: string
}
