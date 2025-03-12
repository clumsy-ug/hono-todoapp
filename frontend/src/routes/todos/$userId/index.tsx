import { createFileRoute } from '@tanstack/react-router'
import Todos from './-components/Todos'
import TodosError from './-components/TodosError'
import TodosPending from './-components/TodosPending'

export const Route = createFileRoute('/todos/$userId/')({
  component: Todos,
  errorComponent: TodosError,
  pendingComponent: TodosPending
})
