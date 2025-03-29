import { Todo } from "../-types"
import { useGetTodos } from "../-functions/useGetTodos"

export default function Todos() {
  const result: string | Todo[] = useGetTodos()

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
