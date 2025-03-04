import { useState } from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

export default function Auth() {
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const handleClick = () => {
    setIsLoggingIn(prev => !prev)
  }

  return (
    <div>
      <button onClick={handleClick}>{isLoggingIn ? '新規登録ページへ' : 'ログインページへ'}</button>
      {isLoggingIn ? <SignIn /> : <SignUp />}
    </div>
  )
}
