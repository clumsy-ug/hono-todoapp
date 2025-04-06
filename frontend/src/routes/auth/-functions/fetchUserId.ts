export const fetchUserId = async() => {
  const res = await fetch('http://localhost:5001/api/get/userId')
  const result = await res.json()

  if (!res.ok) {
    throw new Error('fetchUserIdでエラーだよ')
  }

  if (result.status === 'failed') {
    throw new Error(result.message)
  }

  return result.userId
}
