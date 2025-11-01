import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_user/mymovies')({
  component: RouteComponent,
})

function RouteComponent() {
  const url = 'salve'

  return <section className='w-screen flex justify-center'>
    <div id='container' className='w-[1200px] flex flex-col space-y-16'>
      <div className='flex justify-between items-end'>

        <div className='flex flex-col gap-4'>
          <h2 className='text-4xl font-bold'>My Movies</h2>
          <p className='text-xl text-zinc-400'>Manage your favorite movies</p>
        </div>

        <div id='filter' className='border-2 p-1 rounded-md flex'>
          <Button variant={'ghost'}>
            Todos
          </Button>
          <Button variant={'ghost'}>
            Já assisti
          </Button>
          <Button variant={'ghost'}>
            Quero Assistir
          </Button>
          <Button variant={'ghost'}>
            Estou assistindo
          </Button>
        </div>
      </div>

      <div className='w-full grid grid-cols-3 gap-8'>
        <div className='flex h-[400px] border-2 rounded-md'>
          <img src={url} alt='movie image' className='' />
        </div>
        <div className='flex h-[400px] border-2 rounded-md'>
          <img src={url} alt='movie image' className='' />
        </div>
        <div className='flex h-[400px] border-2 rounded-md'>
          <img src={url} alt='movie image' className='' />
        </div>
      </div>
    </div>
  </section>
}
