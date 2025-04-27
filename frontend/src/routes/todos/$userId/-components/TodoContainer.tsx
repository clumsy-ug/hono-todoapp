import { useParams } from "@tanstack/react-router"
import { useGetTodos } from "../-functions/useGetTodos"
import { TodoResponse } from "../-types"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import useFetchTest from "../-functions/useFetchTest"

export default function Todos() {
  const { userId } = useParams({ from: '/todos/$userId/' })
  const result: TodoResponse = useGetTodos(userId)

  const credentials = {
    mailAddress: "ここにemail",
    password: "ここにpass"
  }
  const fetchTest = useFetchTest(credentials)
  console.log("取れた", fetchTest)

  return (
    <div>
      <TodoList todos={result} />
      <TodoForm />
    </div>
  )
}
