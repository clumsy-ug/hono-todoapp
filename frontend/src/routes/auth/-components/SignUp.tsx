import { useState } from "react"

export default function SignUp() {
  const [mailAddress, setMailAddress] = useState<string>('')
  const [password, setPassword] = useState<string>('')

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

    alert('新規登録のリクエスト送る！')
  }

  return (
    <div>
      <h1>新規登録情報を入力</h1>

      <form onSubmit={onSubmit}>
        <input type="text" placeholder="メールアドレス" value={mailAddress} onChange={onMailChange} />
        <input type="password" placeholder="パスワード" value={password} onChange={onPassChange} />
        <button type="submit">ログイン</button>
      </form>
    </div>
  )
}
