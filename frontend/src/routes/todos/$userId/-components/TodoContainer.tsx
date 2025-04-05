import { useParams } from "@tanstack/react-router"
import { useGetTodos } from "../-functions/useGetTodos"
import { TodoResponse } from "../-types"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"

export default function Todos() {
  const { userId } = useParams({ from: '/todos/$userId/' })
  const result: TodoResponse = useGetTodos(userId)

  return (
    <div>
      <TodoList todos={result} />
      <TodoForm />
    </div>
  )
}
