import { useState } from "react"

export default function Auth() {
  const [message, setMessage] = useState<string | null>('')

  const handleClick = async () => {
    const data = await fetch('/auth/page')
    const text = await data.text()
    setMessage(text)
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>/authにリクエスト送信</button>
    </div>
  )
}
