import { Todo } from "../-types"
import { useGetTodos } from "../-functions/useGetTodos"
import { useParams } from "@tanstack/react-router"

export default function Todos() {
  const { userId } = useParams({ from: '/todos/$userId/' })
  const result: string | Todo[] = useGetTodos(userId)

  if (typeof result === 'string') {
    return <h2>まだTodoはありません</h2>
  }

  return (
    <ul>
      {result.map(todo => (
        <li>{todo.id}: {todo.content}</li>
      ))}
    </ul>
  )
}
