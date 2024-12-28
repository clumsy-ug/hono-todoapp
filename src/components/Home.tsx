import { useState } from "react"

interface HomeProps {
  message: string | null
}

export default function Home() {
  const [message, setMessage] = useState<string | null>('')

  const handleClick = async () => {
    try {
      const data = await fetch('/api')
      const json: HomeProps = await data.json()
      setMessage(json.message)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>/apiにリクエスト送信</button>
    </div>
  )
}
