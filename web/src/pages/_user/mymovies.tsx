import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { FaRegFaceSadCry } from 'react-icons/fa6';
import { StarIcon } from "lucide-react";

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

  return <section className='w-screen flex justify-center'>
    <div id='container' className='w-[1400px] flex flex-col space-y-16' >
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
        {movies.length > 0 ? (
          <div className="w-full grid grid-cols-3 gap-4">
            {
              movies.map((m) => (
                <div key={m.title} className="basis-auto group border-2">
                  <div className="w-full h-[450px] relative rounded-md overflow-hidden">
                    <img src={m.photo} alt={m.title} className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm group-hover:scale-110" />

                    {/* Initial Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col space-y-2 justify-end p-4 transition-opacity duration-300 group-hover:opacity-0">
                      <h3 className="font-semibold text-xl text-white">{m.title}</h3>
                      <div className="w-full flex items-center gap-4">
                        <StarIcon className="text-yellow-400" />
                        <span className="text-base text-white">{m.rate}</span>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="w-full absolute inset-0 bg-black/70 p-4 flex flex-col justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-2xl text-white">{m.title}</h3>
                        <Button variant={'outline'} className="rounded-full">
                          <StarIcon className={`w-6 h-6 text-white ${m.marks.isFavorite ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                        </Button>
                      </div>

                      <div className="flex items-center gap-4 my-4">
                        <span className="text-white text-sm">{m.genres.join(' / ')}</span>
                        <div className="flex items-center gap-1">
                          <StarIcon className="text-yellow-400 w-5 h-5" />
                          <span className="text-white">{m.rate}</span>
                        </div>
                      </div>

                      <div className="w-full flex flex-col gap-2 pt-4">
                        <Button variant="outline" className="flex-1">Já assisti</Button>
                        <Button variant="outline" className="flex-1">Quero Assistir</Button>
                        <Button variant="outline" className="flex-1">Assistindo</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className='w-full h-96 flex flex-col gap-4 justify-center items-center text-zinc-500'>
            <FaRegFaceSadCry size={80} />
            <h3 className='text-2xl font-semibold'>Nenhum filme encontrado</h3>
            <p className='text-lg'>Comece a adicionar filmes à sua lista!</p>
          </div>
        )}

      </div >
    </div >
  </section >
}
