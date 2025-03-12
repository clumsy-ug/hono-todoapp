import { useState } from "react"
import { signUp } from "../-functions/signUp"
import { useNavigate } from "@tanstack/react-router"

export default function SignUp() {
  const [mailAddress, setMailAddress] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const onMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailAddress(e.target.value)
  }

  const onPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!mailAddress && !password) {
      alert('メールアドレスとパスワードが空欄です')
      return
    }

    if (!mailAddress) {
      alert('メールアドレスが空欄です')
      return
    }

    if (!password) {
      alert('パスワードが空欄です')
      return
    }

    const ok = await signUp({ mailAddress, password })
    if (ok) {
      alert('新規登録完了')
      navigate({ to: '/todos' })
      return
    }
  }

  return (
    <div>
      <h1>新規登録情報を入力</h1>

      <form onSubmit={onSubmit}>
        <input type="text" placeholder="メールアドレス" value={mailAddress} onChange={onMailChange} />
        <input type="password" placeholder="パスワード" value={password} onChange={onPassChange} />
        <button type="submit">新規登録</button>
      </form>
    </div>
  )
}
