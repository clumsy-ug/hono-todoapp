import { UpdateTodoProps } from "../-types"

export const fetchUpdateTodo = async({ todoId, newContent }: UpdateTodoProps): Promise<void> => {
  const res = await fetch(`http://localhost:5001/api/todo/update/${todoId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      todoId,
      newContent
    })
  })

  if (!res.ok) {
    throw new Error('TODO編集に失敗しました')
  }

  const result = await res.json()

  if (result.status === 'failed') {
    throw new Error(result.message)
  }
}
