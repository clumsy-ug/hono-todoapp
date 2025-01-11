interface ApiResponse {
  ok: boolean,
  message: string
}

export const fetchData = async(url: string): Promise<ApiResponse> => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('APIリクエストが失敗しました')
  }
  return response.json()
}
