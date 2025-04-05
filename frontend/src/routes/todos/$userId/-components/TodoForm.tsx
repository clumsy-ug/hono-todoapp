import { useState } from "react"
import { useUpdateTodo } from "../-functions/useUpdateTodo"
import { useParams } from "@tanstack/react-router"

export default function TodoForm() {
  const [value, setValue] = useState<string>('')
  const mutate = useUpdateTodo()
  const { userId } = useParams({ from: '/todos/$userId/' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!value.trim()) {
      alert('Todoが空欄です')
      return
    }

    mutate({
      user_id: userId,
      content: value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder="新しいTodo" onChange={handleChange} />
      <button type="submit">登録</button>
    </form>
  )
}
