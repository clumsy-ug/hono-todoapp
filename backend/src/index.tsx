import { Hono } from 'hono'
import { renderer } from './renderer'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(renderer)

// CORS should be called before the route
app.use('/api/*', cors())

app.get('/api', (c) => {
  return c.text('はじめる')
})

export default app
