import { Hono } from 'hono'
import { renderToString } from 'react-dom/server'

const app = new Hono()

app.get('/api', (c) => {
  return c.json({ message: 'apiエンドポイントのホーム画面的な立ち位置のpathだよ' })
})

app.get('/api/test', (c) => {
  return c.text('テストだよ')
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
