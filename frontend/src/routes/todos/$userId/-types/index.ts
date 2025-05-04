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

export interface InsertTodoProps {
  user_id: string
  content: string 
}

export interface UpdateTodoProps {
  todoId: string
  newContent: string
}
