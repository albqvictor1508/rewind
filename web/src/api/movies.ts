export const movies = [
  {
    title: 'Batman',
    photo: '/batman.jpg',
    rate: 4.8,
    genres: ['Ação', 'Herói'],
    actors: ['Christian Bale', 'Heath Ledger'],
    releaseYear: 2008,
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
    actors: ['Tobey Maguire', 'Kirsten Dunst'],
    releaseYear: 2002,
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
    actors: ['Ezra Miller', 'Michael Keaton'],
    releaseYear: 2023,
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
    actors: ['Joaquin Phoenix', 'Robert De Niro'],
    releaseYear: 2019,
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
    actors: ['Joaquin Phoenix', 'Lady Gaga'],
    releaseYear: 2024,
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
    actors: ['Josh Brolin', 'Zoe Saldana'],
    releaseYear: 2018,
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
    actors: ['Josh Brolin', 'Zoe Saldana'],
    releaseYear: 2019,
    marks: {
      isFavorite: false,
      status: 'WATCHED'
    },
  },
];

type FetchMoviesProps = {
  categories?: string[],
  actors?: string[],
  releaseYear?: number
}

export const fetchMovies = ({ actors, categories, releaseYear }: FetchMoviesProps) => {
  let filteredMovies = movies;

  if (categories && categories.length > 0) {
    filteredMovies = filteredMovies.filter(movie => movie.genres.some(genre => categories.includes(genre)));
  }

  if (actors && actors.length > 0) {
    filteredMovies = filteredMovies.filter(movie => movie.actors.some(actor => actors.includes(actor)));
  }

  if (releaseYear) {
    filteredMovies = filteredMovies.filter(movie => movie.releaseYear === releaseYear);
  }

  return filteredMovies;
}

