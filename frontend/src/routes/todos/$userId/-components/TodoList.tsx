import { useDeleteTodo } from "../-functions/useDeleteTodo";
import { ListProps } from "../-types";

export default function TodoList({ todos }: ListProps) {
  const mutate = useDeleteTodo()

  if (typeof todos === 'string') {
    return (
      <h2>まだTodoはありません</h2>
    )
  }

  const handleDeleteClick = (todoId: string) => {
    mutate(todoId)
  }

  return (
    <ul>
      {todos.map(todo => (
        <div key={todo.id}>
          <li style={{ display: 'inline', marginRight: "10px" }}>{todo.content}</li>
          <button onClick={() => handleDeleteClick(todo.id)}>削除</button>
        </div>
      ))}
    </ul>
  )
}
