import { Hono } from 'hono'
import { renderToString } from 'react-dom/server'
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()

app.get('/api', (c) => {
  return c.json({ message: 'Hello, World!' })
})

app.use(
  '/auth/*',
  basicAuth({
    username: 'admin',
    password: 'secret',
  })
)

app.get('/auth/page', (c) => {
  return c.text('You are authorized')
})

app.get('*', (c) => {
  return c.html(
    renderToString(
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css" />
          {import.meta.env.PROD ? (
              <script type="module" src="/static/client.js"></script>
          ) : (
              <script type="module" src="/src/client.tsx"></script>
          )}
        </head>
        <body>
          <div id="root"></div>
        </body>
      </html>
    )
  )
})

export default app
