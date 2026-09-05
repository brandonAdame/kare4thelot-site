import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/get-involved')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/get-involved"!</div>
}
