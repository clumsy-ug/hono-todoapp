import { Link, useNavigate } from "@tanstack/react-router"
import { signOut } from "../auth/-functions/signOut"
import { isLoggedIn } from '~/backend/supabase/auth/isLoggedIn'
import { useEffect, useState } from "react"

export default function NavbarTop() {
  const [session, setSession] = useState<boolean>(false)
  const navigate = useNavigate()

  useEffect(() => {
    (async() => {
      const _session = await isLoggedIn()
      if (_session) {
        setSession(_session)
      }
    })()
  }, [session])

  const handleClick = async() => {
    const ok = await signOut()
    if (ok) {
      setSession(false)
      navigate({ to: '/' })
    }
  }

  return (
    <div>
      <Link to="/">ホーム</Link>
      {session && <button onClick={handleClick}>ログアウト</button>}
    </div>
  )
}
