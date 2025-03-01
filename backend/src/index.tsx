import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/api', (c) => {
  return c.text('はじめる')
})

export default app
