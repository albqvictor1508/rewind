import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute('/_app/home')({
  component: RouteComponent
})

//TODO: terminar isso aqui

export function RouteComponent() {
  const categories = [
    {
      name: 'Ação',
      movies: [
        {
          title: 'Batman',
          photo: '/batman.jpg',
          rate: 4.8,
          marks: {
            isFavorite: true,
            status: 'WATCHED'
          }
        },
        {
          title: 'Homem Aranha',
          photo: '/aranha.jpg',
          rate: 4.7,
          marks: {
            isFavorite: false,
            status: 'WATCHING'
          }
        },
        {
          title: 'Flash',
          photo: '/flash.jpg',
          rate: 4.5,
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
          marks: {
            isFavorite: true,
            status: 'WATCHED'
          }
        },
        {
          title: 'Coringa 2',
          photo: '/coringa-2.jpg',
          rate: 5.0,
          marks: {
            isFavorite: true,
            status: 'TO_WATCH'
          }
        },
        {
          title: 'Thanos',
          photo: '/thanos.jpg',
          rate: 4.8,
          marks: {
            isFavorite: false,
            status: 'WATCHED'
          }
        },
        {
          title: 'Thanos 2',
          photo: '/thanos-2.jpg',
          rate: 4.7,
          marks: {
            isFavorite: false,
            status: 'WATCHED'
          }
        }
      ]
    },
    {
      name: 'Comédia',
      movies: []
    },
    {
      name: 'Drama',
      movies: []
    }


  ]

  return (
    <div className="w-full h-full flex justify-center">
      <h3>Mais Vistos da Semana</h3>
    </div>
  )
}
