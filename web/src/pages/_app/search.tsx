import { RewindSelect } from '@/components/rewind-select'
import { Input } from '@/components/ui/input'
import { MovieCard } from '@/components/movie-card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/search')({
  component: RouteComponent,
})

function RouteComponent() {
  const movies = [
    {
      title: 'Batman',
      photo: '/batman.jpg',
      rate: 4.8,
      genres: ['Ação', 'Herói'],
      marks: {
        isFavorite: true,
        status: 'WATCHED'
      }
    },
    {
      title: 'Homem Aranha',
      photo: '/aranha.jpg',
      rate: 4.7,
      genres: ['Ação', 'Herói'],
      marks: {
        isFavorite: false,
        status: 'WATCHING'
      }
    },
    {
      title: 'Flash',
      photo: '/flash.jpg',
      rate: 4.5,
      genres: ['Ação', 'Herói'],
      marks: {
        isFavorite: false,
        status: 'TO_WATCH'
      },
    },
    {
      title: 'Coringa',
      photo: '/coringa.jpg',
      rate: 4.9,
      genres: ['Vilão', 'Drama'],
      marks: {
        isFavorite: true,
        status: 'WATCHED'
      }
    },
    {
      title: 'Coringa 2',
      photo: '/coringa-2.jpg',
      rate: 5.0,
      genres: ['Vilão', 'Musical'],
      marks: {
        isFavorite: true,
        status: 'TO_WATCH'
      }
    },
    {
      title: 'Thanos',
      photo: '/thanos.jpg',
      rate: 4.8,
      genres: ['Vilão', 'Ficção'],
      marks: {
        isFavorite: false,
        status: 'WATCHED'
      },
    },
    {
      title: 'Thanos 2',
      photo: '/thanos-2.jpg',
      rate: 4.7,
      genres: ['Vilão', 'Ficção'],
      marks: {
        isFavorite: false,
        status: 'WATCHED'
      },
    },
    {
      title: 'Comédia 1',
      photo: 'https://source.unsplash.com/500x500/?comedy',
      rate: 3.2,
      genres: ['Comédia'],
      marks: {
        isFavorite: false,
        status: 'TO_WATCH'
      }
    },
    {
      title: 'Comédia 2',
      photo: 'https://source.unsplash.com/500x501/?comedy',
      rate: 2.1,
      genres: ['Comédia'],
      marks: {
        isFavorite: false,
        status: 'TO_WATCH'
      }
    },
    {
      title: 'Comédia 3',
      photo: 'https://source.unsplash.com/501x500/?comedy',
      rate: 4.1,
      genres: ['Comédia'],
      marks: {
        isFavorite: false,
        status: 'TO_WATCH'
      }
    },
    {
      title: 'Drama 1',
      photo: 'https://source.unsplash.com/500x500/?drama',
      rate: 4.9,
      genres: ['Drama'],
      marks: {
        isFavorite: true,
        status: 'WATCHED'
      }
    },
    {
      title: 'Drama 2',
      photo: 'https://source.unsplash.com/500x501/?drama',
      rate: 4.2,
      genres: ['Drama'],
      marks: {
        isFavorite: false,
        status: 'WATCHED'
      }
    },
    {
      title: 'Sci-Fi 1',
      photo: 'https://source.unsplash.com/500x500/?scifi',
      rate: 4.9,
      genres: ['Ficção'],
      marks: {
        isFavorite: true,
        status: 'WATCHED'
      }
    },
    {
      title: 'Sci-Fi 2',
      photo: 'https://source.unsplash.com/501x500/?scifi',
      rate: 4.9,
      genres: ['Ficção'],
      marks: {
        isFavorite: true,
        status: 'WATCHED'
      }
    },
    {
      title: 'Sci-Fi 3',
      photo: 'https://source.unsplash.com/500x501/?scifi',
      rate: 4.9,
      genres: ['Ficção'],
      marks: {
        isFavorite: true,
        status: 'WATCHED'
      }
    }
  ];

  return <div className='w-full h-screen flex flex-col items-center'>
    <div className='w-[1400px] h-full p-6'>
      <Input type='search' className='mb-12 p-8' placeholder='Pesquisar filmes, séries, atores...' />

      <div className='flex gap-4 items-center pb-12'>
        <RewindSelect payload={['salve', 'salve2']} label='Salves' />
        <RewindSelect payload={['salve', 'salve2']} label='Salves' />
        <RewindSelect payload={['salve', 'salve2']} label='Salves' />
        <RewindSelect payload={['salve', 'salve2']} label='Salves' />
      </div>

      <div className='flex flex-col space-y-8'>
        <h2 className='text-4xl font-bold'>Buscas Populares</h2>

        <div className='w-full h-screen grid grid-cols-3 gap-8'>
          {
            movies.map(
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
