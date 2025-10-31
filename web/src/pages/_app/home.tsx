import { createFileRoute, Link } from "@tanstack/react-router"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const Route = createFileRoute('/_app/home')({
  component: RouteComponent
})

export function RouteComponent() {
  return (
    <div>
      <h1>Home</h1>
    </div >
  )
}
