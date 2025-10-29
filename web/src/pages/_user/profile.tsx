import { Profile } from '@/components/profile'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_user/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  const username = 'albqvxc';
  const email = 'albq.victor@gmail.com';

  return (
    <section className='w-full h-full mt-24 flex flex-col space-y-12 justify-center items-center'>
      <div className='w-[1200px] flex flex-col bg-zinc-900 rounded-xl p-8 border-2'>
        <Profile user={
          {
            displayName: "John Doe",
            photo: "https://unsplash.com/photos/silhouette-of-man-illustration-2LowviVHZ-E",
            username: "john_doe",
            email: "john@doe.com"
          }
        } />
      </div>

      <div className='w-[1200px] flex flex-col space-y-4'>
        <h2 className='text-2xl font-bold'>Visão Geral</h2>

        <div className='w-full rounded-xl flex gap-4'>
          <div className='flex rounded-xl flex-col space-y-2 flex-1 p-8 bg-zinc-900 border-2 border-zinc-850'>
            <h3 className='text-xl text-zinc-600 font-medium'>Favorite Movies</h3>
            <span className='text-4xl font-bold'>10</span>
          </div>

          <div className='bg-zinc-900 rounded-xl flex flex-col space-y-2 flex-1 p-8 border-2 border-zinc-850'>
            <h3 className='text-xl text-zinc-600 font-medium'>Movies Watched</h3>
            <span className='text-4xl font-bold'>123</span>
          </div>

          <div className='bg-zinc-900 rounded-xl flex flex-col space-y-2 flex-1 p-8 border-2 border-zinc-850'>
            <h3 className='text-xl text-zinc-600 font-medium'>Movies Watching</h3>
            <span className='text-4xl font-bold'>2</span>
          </div>
        </div>
      </div>

      <div className='w-[1200px] flex flex-col space-y-4'>
        <h2 className='text-2xl font-bold'>Account Settings</h2>

        <div className='bg-zinc-900 flex flex-col space-y-4 border-2 rounded-xl p-4'>
          <div className='w-full flex gap-8 border-b-2 pt-2 pb-4 border-zinc-800'>

            <div className='flex flex-col space-y-2 flex-1'>
              <label className='text-base text-zinc-400 font-medium' htmlFor='username'>Username</label>

              <Input
                type="text"
                id="username"
                className="p-6 font-normal text-lg"
                placeholder={username}
              />

            </div>

            <div className='flex flex-col space-y-2 flex-1'>
              <label className='text-base text-zinc-400 font-medium' htmlFor='username'>Email</label>
              <Input
                type="email"
                id="email"
                className="p-6 font-normal text-lg"
                placeholder={email}
              />
            </div>
          </div>

          <div className='flex justify-between items-center'>
            <div className='flex flex-col space-y-2'>
              <h3>Change password</h3>
              <p>We recommend you use a strong password</p>
            </div>
            <Button />
          </div>
        </div>

      </div>

    </section >
  )
}
