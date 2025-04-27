import { User } from '~/backend/node_modules/@supabase/auth-js/src/lib/types'

export const isValidUser = (user: User | null): boolean => {
  if (!user) {
    alert('サインアップの結果、userが取得できませんでした')
    console.error("user: ", user)
    return false
  }
  return true
}
