import { UpdateTodoProps } from "../-types";

export const updateTodo = async({ user_id, content }: UpdateTodoProps): Promise<void> => {
  // post methodでhttp://localhost:5001/api/todos/:userIdにfetch。bodyなども指定
}
