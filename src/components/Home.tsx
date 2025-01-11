import { useNavigate } from "@tanstack/react-router";
import { fetchData } from "../utils/fetchData";

export const Home = () => {
  const navigate = useNavigate()

  const toLogin = async() => {
    const data = await fetchData('/auth/login')
    if (data.ok) {
      navigate({ to: '/todos' })
    }
  }

  const toSignup = async() => {
    const data = await fetchData('/auth/signup')
    if (data.ok) {
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
