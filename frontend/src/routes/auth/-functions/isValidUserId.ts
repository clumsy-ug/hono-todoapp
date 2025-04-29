export const isValidUserId = (userId: string | boolean): boolean => {
  if (!userId) {
    alert('サインインの結果、userIdが取得できませんでした')
    console.error("userId: ", userId)
    return false
  }

  return true
}
