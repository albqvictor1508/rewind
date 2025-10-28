import { Profile } from '@/components/profile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_user/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className='w-full h-full mt-8 flex justify-center items-center'>
      <div className='w-[1200px] flex flex-col bg-zinc-800 rounded-xl p-4'>
        <div>
          <Profile user={{ displayName: "salve", photo: "salve", username: "salve", email: "salve" }} />
        </div>
      </div>
    </section>
  )
}
