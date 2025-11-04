import axios from "axios";

interface GetMoviesOptions {
  genres?: string[];
  actors?: string[],
  releaseYear?: number;
}

export const fetchMovies = async ({ actors, genres, releaseYear }: GetMoviesOptions) => {
  let path = '/movies'

  if (actors && actors?.length > 0) path += `?actors=${actors?.join(',')}`
  if (genres && genres?.length > 0) path += `?genres=${genres?.join(',')}`
  if (releaseYear) path += `?releaseYear=${releaseYear}`

  const instance = axios.create({
    baseURL: import.meta.env.API_BASE_URL!,
  });

  const { data: movies } = await instance.get(path)

  return path;
}
