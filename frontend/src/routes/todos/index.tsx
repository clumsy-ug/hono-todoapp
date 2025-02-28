import { createFileRoute } from '@tanstack/react-router'
import Todos from './-components/Todos'
import IndexPending from '../-components/IndexPending'
import IndexError from '../-components/IndexError'

export const Route = createFileRoute('/todos/')({
  component: Todos,
  pendingComponent: IndexPending,
  errorComponent: IndexError
})
