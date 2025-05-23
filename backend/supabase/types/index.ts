export type AuthProps = {
  mailAddress: string
  password: string
}

export type SignUpProps = AuthProps
export type SignInProps = AuthProps

export type RegisterUserProps = {
  userId: string
  email: string
}

export type UpdateTodoProps = {
  todoId: string
  newContent: string
}
