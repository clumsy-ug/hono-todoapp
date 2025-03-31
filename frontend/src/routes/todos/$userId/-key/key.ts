/*
export const todoKeys = {
  all: ['todos'],
  lists: () => [...todoKeys.all, 'list'],
  list: (filters: string) => [...todoKeys.lists(), { filters }],
  details: () => [...todoKeys.all, 'detail'],
  detail: (id: number) => [...todoKeys.details(), id],
} as const
*/

export const todoKeys = {
  getTodos: ['getTodos'],
  queryTodos: ['queryTodos']
} as const
