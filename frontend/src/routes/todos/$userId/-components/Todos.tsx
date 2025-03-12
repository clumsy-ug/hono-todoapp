import { useParams } from "@tanstack/react-router"

export default function Todos() {
  const { userId } = useParams({ from: '/todos/$userId/' })

  return (
    <p>userId: {userId}</p>
  )
}
