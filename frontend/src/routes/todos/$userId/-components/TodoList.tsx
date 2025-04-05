import { ListProps } from "../-types";

export default function TodoList({ todos }: ListProps) {
  if (typeof todos === 'string') {
    return (
      <h2>まだTodoはありません</h2>
    )
  }

  return (
    <ul>
      {todos.map(todo => (
        <li>{todo.id}: {todo.content}</li>
      ))}
    </ul>
  )
}
