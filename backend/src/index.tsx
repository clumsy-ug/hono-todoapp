import { Hono } from 'hono'
// import { renderer } from './renderer'
import { cors } from 'hono/cors'
import { queryTodos } from '../supabase/CRUD/queryTodos'
import { queryUpdateTodo } from '../supabase/CRUD/queryUpdateTodo'

const app = new Hono()

// app.use(renderer)

app.use('/api/*', cors({
    origin: 'http://localhost:5000',
  })
)

app.get('/api/test', (c) => {
  return c.text('テストだよー')
})

app.get('/api/todos/:userId', async (c) => {
  const userId = c.req.param('userId')
  const result = await queryTodos(userId)

  if (result === null) {
    return c.json({
      status: 'success',
      data: [],
      message: 'まだTodoはありません'
    })
  } else {
    return c.json({
      status: 'success',
      data: result,
      message: 'Todo取得完了'
    })
  }
})

app.post('/api/todos/:userId', async (c) => {
  const body = await c.req.json()
  const success = await queryUpdateTodo(body)
  if (!success) {
    return c.json({
      status: 'failed',
      message:  'APIでTODO更新に失敗しました'
    })
  } else {
    return c.json({
      status: 'success',
      message: 'APIでTODO更新に成功しました'
    })
  }
})

export default app
