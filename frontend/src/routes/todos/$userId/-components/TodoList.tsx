import { useDeleteTodo } from "../-functions/useDeleteTodo"
import { useUpdateTodo } from "../-functions/useUpdateTodo"
import { ListProps } from "../-types"
import toast, { Toaster } from 'react-hot-toast'

export default function TodoList({ todos }: ListProps) {
  const mutateDelete = useDeleteTodo()
  const mutateUpdate = useUpdateTodo()

  if (typeof todos === 'string') {
    return (
      <h2>まだTodoはありません</h2>
    )
  }

  const handleDeleteTodo = (todoId: string) => {
    mutateDelete(todoId)
    toast.success('削除成功')
  }

  const handleUpdateTodo = (todoId: string, nowContent: string) => {
    const newContent = prompt("新しいTodoを入力してください", nowContent)

    if (!newContent) {
      toast.error('空欄で登録はできません')
      return
    }

    if (newContent === nowContent) return

    mutateUpdate({ todoId, newContent })
    toast.success('更新成功')
  }

  return (
    <>
      <Toaster />
      <ul style={{ paddingLeft: '0px' }}>
        {todos.map(todo => (
          <div key={todo.id} style={{ marginBottom: "10px" }}>
            <li style={{ display: 'inline', marginRight: "10px" }}>{todo.content}</li>
            <button onClick={() => handleDeleteTodo(todo.id)} style={{ marginRight: "10px" }}>削除</button>
            <button onClick={() => handleUpdateTodo(todo.id, todo.content)}>編集</button>
          </div>
        ))}
      </ul>
    </>
  )
}
