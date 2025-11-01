import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { HomeMovies } from "@/components/home-movies"

export const Route = createFileRoute('/_user/mymovies')({
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
      }
    },
    {
      title: 'Thanos 2',
      photo: '/thanos-2.jpg',
      rate: 4.7,
      genres: ['Vilão', 'Ficção'],
      marks: {
        isFavorite: false,
        status: 'WATCHED'
      }
    }
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
    }
  ]

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

      <div className="w-full h-full flex flex-col space-y-12">
        {
          categories.map(
            category => (
              <div className="flex flex-col space-y-4" key={category.name + '-' + new Date()}>
                <h3 className="text-zinc-50 text-3xl font-bold">{category.name}</h3>
                <HomeMovies movies={category.movies} />
              </div>
            )
          )
        }

      </div >
    </div>
  </section>
}
