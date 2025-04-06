import { Hono } from 'hono'
// import { renderer } from './renderer'
import { cors } from 'hono/cors'
import { queryTodos } from '../supabase/CRUD/queryTodos'
import { queryUpdateTodo } from '../supabase/CRUD/queryUpdateTodo'
import { signIn } from '../supabase/auth/signIn'
import { getUserId } from '../supabase/auth/getUserId'

const app = new Hono()

// app.use(renderer)

app.use('/api/*', cors({
    origin: 'http://localhost:5000',
  })
)

app.get('/api/get/userId', async (c) => {
  const userId = await getUserId()
  if (typeof userId === 'string') {
    return c.json({
      status: 'success',
      userId
    })
  } else {
    return c.json({
      status: 'failed',
      message: 'API: userId取得に失敗'
    })
  }
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

app.post('/api/signin', async (c) => {
  const { mailAddress, password } = await c.req.json()
  const success = await signIn({ mailAddress, password })
  if (success) {
    return c.json({
      status: 'success',
      message: 'API: signInに成功しました',
      mailAddress
    })
  } else {
    return c.json({
      status: 'failed',
      message: 'API: singInに失敗しました',
      mailAddress
    })
  }
})

app.post('/api/todos/:userId', async (c) => {
  const body = await c.req.json()
  const success = await queryUpdateTodo(body)
  if (success) {
    return c.json({
      status: 'success',
      message: 'API: TODO更新に成功しました'
    })
  } else {
    return c.json({
      status: 'failed',
      message:  'API: TODO更新に失敗しました'
    })
  }
})

export default app
