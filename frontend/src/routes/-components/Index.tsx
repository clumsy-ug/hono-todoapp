import { Suspense } from "react"
import IndexPromiseReceiver from "./IndexPromiseReceiver"
import IndexPending from "./IndexPending"

export default function Index() {
  const response = fetch('http://localhost:5001/api')

  return (
    <Suspense fallback={<IndexPending />}>
      <IndexPromiseReceiver response={response} />
    </Suspense>
  )
}
