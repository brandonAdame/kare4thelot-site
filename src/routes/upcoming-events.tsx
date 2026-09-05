import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/upcoming-events')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/upcoming-events"!</div>
}
