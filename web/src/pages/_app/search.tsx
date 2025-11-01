import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/search')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='w-full h-screen flex flex-col'>
    <div className='w-[1200px] h-full border'>
      salve
    </div>
  </div>
}
