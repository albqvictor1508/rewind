import { Menu } from '@/components/menu'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_user')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='w-screen h-full flex flex-col space-y-16'>
    <Menu />
    <Outlet />
  </div>
}
