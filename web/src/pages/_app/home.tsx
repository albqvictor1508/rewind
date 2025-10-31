import { HomeMovies } from "@/components/home-movies"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/_app/home')({
  component: RouteComponent
});

export function RouteComponent() {
  const categories = [
    {
      name: 'Ação',
      movies: [
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
          }
        }
      ]
    },
    {
      name: 'Vilões',
      movies: [
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
      ]
    },
    {
      name: 'Comédia',
      movies: [
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
      name: 'Drama',
      movies: [
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
        }
      ]
    },
    {
      name: 'Ficção Científica',
      movies: [
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
      ]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col px-8 space-y-12">
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
  )
}
