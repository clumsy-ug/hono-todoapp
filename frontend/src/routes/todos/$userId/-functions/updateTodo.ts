import { UpdateTodoProps } from "../-types";

export const updateTodo = async({ user_id, content }: UpdateTodoProps): Promise<void> => {
  const res = await fetch(`http://localhost:5001/api/todos/${user_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id,
      content
    })
  })

  if (!res.ok) {
    throw new Error('TODO新規投稿に失敗しました')
  }

  const result = await res.json()

  if (result.status === 'failed') {
    throw new Error(result.message)
  }
}
