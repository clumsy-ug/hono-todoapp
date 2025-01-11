import { useNavigate } from "@tanstack/react-router";

interface Response {
  ok: boolean,
  message: string
}

export const Home = () => {
  const navigate = useNavigate()

  const toLogin = async() => {
    const response = await fetch('/auth/login')
    const obj: Response = await response.json();
    if (obj.ok) {
      navigate({ to: '/todos' })
    }
  }

  const toSignup = async() => {
    const response = await fetch('/auth/signup')
    const obj: Response = await response.json();
    if (obj.ok) {
      navigate({ to: '/todos' })
    }
  }

  return (
    <>
      <h1>homeだよ</h1>
      <button onClick={toLogin} style={{ marginRight: '5px' }}>ログイン</button>
      <button onClick={toSignup}>新規登録</button>
    </>
  )
}
