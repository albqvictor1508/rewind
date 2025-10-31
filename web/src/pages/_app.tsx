import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Menu } from '@/components/menu'

export const Route = createFileRoute('/_app')({
  component: AppLayout
})

function AppLayout() {
  return (
    <div className="w-screen h-full flex flex-col space-y-16">
      <Menu />
      <Outlet />
    </div>
  )
}
