import { createFileRoute, Link } from "@tanstack/react-router"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Menu } from "@/components/menu"

export const Route = createFileRoute('/_app/home')({
  component: RouteComponent
})

export function RouteComponent() {
  return (
    <div className="w-screen h-full">
      <Menu />
    </div>
  )
}
