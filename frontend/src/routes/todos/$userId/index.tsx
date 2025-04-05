import { createFileRoute } from '@tanstack/react-router'
import TodoContainer from './-components/TodoContainer'
import TodosError from './-components/TodosError'
import TodosPending from './-components/TodosPending'

export const Route = createFileRoute('/todos/$userId/')({
  component: TodoContainer,
  errorComponent: TodosError,
  pendingComponent: TodosPending
})
