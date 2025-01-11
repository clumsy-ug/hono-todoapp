import { useState } from "react"

interface Todo {
  id: number,
  content: string
}

const initialTodos = [
  {
    id: 1,
    content: '掃除する'
  },
  {
    id: 2,
    content: '勉強'
  },
  {
    id: 3,
    content: '技術書買う'
  }
]

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [newTodo, setNewTodo] = useState<string>('')

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('addTodoテスト')
  }

  return (
    <div>
      <h1>Todo一覧</h1>

      {todos.map(todo => (
        <ul key={todo.id}>
          <li>
            {todo.id} / {todo.content}
          </li>
        </ul>
      ))}

      <h1>新しいTodoを追加</h1>

      <form onSubmit={addTodo}>
        <input type="text" value={newTodo} onChange={inputChange} />
        <button type="submit">追加</button>
      </form>
    </div>
  )
}
