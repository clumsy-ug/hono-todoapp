import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast'
import { useInsertTodo } from "../-functions/useInsertTodo"
import { useParams } from "@tanstack/react-router"
import { checkEmpty } from "../-functions/chackEmpty"

export default function TodoForm() {
  const [value, setValue] = useState<string>('')
  const { userId } = useParams({ from: '/todos/$userId/' })
  const mutate = useInsertTodo()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!checkEmpty(value)) return

    mutate({
      user_id: userId,
      content: value
    })

    setValue('')
    toast.success('登録成功')
  }

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="新しいTodo" onChange={handleChange} />
        <button type="submit">登録</button>
      </form>
    </>
  )
}
