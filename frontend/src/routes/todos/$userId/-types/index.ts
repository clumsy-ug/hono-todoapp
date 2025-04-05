export interface Todo {
  id: string
  user_id: string
  content: string
  created_at: string
}

export type TodoResponse = string | Todo[]

export interface ListProps {
  todos: TodoResponse
}

export interface UpdateTodoProps {
  user_id: string
  content: string 
}
