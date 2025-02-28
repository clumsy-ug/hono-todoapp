const initialTodos = [
  {
    id: 1,
    content: '掃除する'
  },
  {
    id: 2,
    content: '病院行く'
  },
  {
    id: 3,
    content: '勉強する'
  }
]

export default function Todos() {
  return (
    <ul>
      {initialTodos.map(todo => (
        <li key={todo.id}>{todo.id} | {todo.content}</li>
      ))}
    </ul>
  )
}
