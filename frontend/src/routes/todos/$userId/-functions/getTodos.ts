import { Todo } from '../-types'

export const getTodos = async(userId: string): Promise<string | Todo[]> => {
  const res = await fetch(`http://localhost:5001/api/todos/${userId}`)
  const result = await res.json()

  if (!result.data.length) {
    return result.message
  } else {
    return result.data
  }
}
