import { Hono } from 'hono'
// import { renderer } from './renderer'
import { cors } from 'hono/cors'
import { queryTodos } from '../supabase/CRUD/queryTodos'

const app = new Hono()

// app.use(renderer)

app.use('/api/*', cors({
    origin: 'http://localhost:5000',
  })
)

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

export default app
