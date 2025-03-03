import { createFileRoute } from '@tanstack/react-router'
import Index from './-components/Index'
import IndexPending from './-components/IndexPending'
import IndexError from './-components/IndexError'

export const Route = createFileRoute('/')({
  component: Index,
  pendingComponent: IndexPending,
  errorComponent: IndexError
})
