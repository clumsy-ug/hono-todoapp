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
        <div key={todo.id}>
          <li>todoのid: {todo.id}</li>
          <li>todoのcontent: {todo.content}</li>
        </div>
      ))}
    </ul>
  )
}
