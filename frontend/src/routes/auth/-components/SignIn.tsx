import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { useSignIn } from "../-functions/useSignIn"

export default function SignIn() {
  const [mailAddress, setMailAddress] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const mutate = useSignIn()

  const onMailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMailAddress(e.target.value)
  }

  const onPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!mailAddress && !password) {
      toast.error('メールアドレスとパスワードが空欄です')
      return
    }

    if (!mailAddress) {
      toast.error('メールアドレスが空欄です')
      return
    }

    if (!password) {
      toast.error('パスワードが空欄です')
      return
    }

    mutate({ mailAddress, password })
    toast.success('ログイン成功')
  }

  return (
    <>
      <Toaster />

      <div>
        <h1>ログイン情報を入力</h1>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="メールアドレス"
            value={mailAddress}
            onChange={onMailChange}
            autoComplete="current-mailAddress"
          />
          <input
            type="password"
            placeholder="パスワード"
            value={password}
            onChange={onPassChange}autoComplete="current-password"
          />
          <button type="submit">ログイン</button>
        </form>
      </div>
    </>
  )
}
