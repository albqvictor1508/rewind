import { RewindSelect } from '@/components/rewind-select'
import { Input } from '@/components/ui/input'
import { MovieCard } from '@/components/movie-card'
import { createFileRoute } from '@tanstack/react-router'
import type { MovieProps } from '@/components/home-movies'

export const Route = createFileRoute('/_app/search')({
  component: RouteComponent,
})

function RouteComponent() {
  const filteredMovies: MovieProps[] = [
    {
      title: "Coringa 2",
      genres: ["Ação", "Drama"],
      rate: 5,
      photo: '/coringa-2.jpg',
      marks: {
        isFavorite: false,
        status: 'WANT_WATCH'
      }
    }
  ]

  return <div className='w-full h-screen flex flex-col items-center'>
    <div className='w-[1400px] h-full p-6'>
      <Input type='search' className='mb-12 p-6' placeholder='Search movies, actors, series...' />

      <div className='flex gap-4 items-center pb-12'>
        <RewindSelect payload={['salve', 'salve']} label='Genre' />
        <RewindSelect payload={['salve', 'salve']} label='Actors' />
        <RewindSelect payload={['salve', 'salve']} label='Release Year' />
      </div>

      <div className='flex flex-col space-y-8'>
        <h2 className='text-4xl font-bold'>Popular Searches</h2>

        <div className='w-full h-screen grid grid-cols-3 gap-8'>
          {
            filteredMovies?.map(
              m => (
                <MovieCard movie={m} cardWidth={400} cardHeight={400} />
              )
            )
          }
        </div>
      </div>
    </div >
  </div>
}
