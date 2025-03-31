import { createClient } from "@supabase/supabase-js"

// ここ、最後にas stringつけちゃうと環境変数が未定義の場合にランタイムエラーを引き起こしてしまう
// なのでif文で存在チェックを行った方が良い
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseApiKey = import.meta.env.VITE_SUPABASE_API_KEY

if (!supabaseUrl || !supabaseApiKey) {
  // サーバー起動時になるべく早くエラーを検知できるようにする
  throw new Error("VITE_SUPABASE_URLとVITE_SUPABASE_API_KEYが環境変数内に定義されてないとダメ")
}

// ここに来る時点で string であることが保証される (Viteが注入するため)
export const supabase = createClient(supabaseUrl, supabaseApiKey)
