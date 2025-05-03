export const fetchDeleteTodo =  async(todoId: string): Promise<void> => {
  const res = await fetch(`http://localhost:5001/api/todo/delete/${todoId}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application-json"
    },
    body: JSON.stringify({
      todoId
    })
  })

  if (!res.ok) {
    throw new Error('Todo削除で失敗しました')
  }

  const result = await res.json()

  if (result.status === 'failed') {
    throw new Error(result.message)
  }
}
