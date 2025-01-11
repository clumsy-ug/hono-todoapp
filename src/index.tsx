import { Hono } from 'hono'
import { renderToString } from 'react-dom/server'
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()

app.use(
  '/auth/login',
  basicAuth({
    username: 'admin',
    password: 'login',
  })
)

app.use(
  '/auth/signup',
  basicAuth({
    username: 'admin',
    password: 'signup',
  })
)

app.get('/auth/login', (c) => {
  return c.json({
    ok: true,
    message: 'login ok'
  })
})

app.get('/auth/signup', (c) => {
  return c.json({
    ok: true,
    message: 'signup ok'
  })
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
              <script type="module" src="/src/main.tsx"></script>
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
