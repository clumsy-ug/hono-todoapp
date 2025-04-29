import { InsertTodoProps } from "../-types";

export const insertTodo = async({ user_id, content }: InsertTodoProps): Promise<void> => {
  const res = await fetch(`http://localhost:5001/api/todos/insert/${user_id}`, {
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
    throw new Error('TODO作成に失敗しました')
  }

  const result = await res.json()

  if (result.status === 'failed') {
    throw new Error(result.message)
  }
}
