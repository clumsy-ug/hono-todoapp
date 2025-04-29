export async function fetchRegisterUser(userId: string, email: string): Promise<boolean> {
  const res = await fetch("http://localhost:5001/api/register/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userId,
      email
    })
  })

  if (!res.ok) {
    throw new Error('register userのfetchに失敗しました')
  }

  const result = await res.json()

  if (result.status === "failed") {
    throw new Error(result.message)
  }

  return true
}
