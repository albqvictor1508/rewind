import { MovieService } from "src/modules/movies/service";

const movies = await MovieService.getMovie("1113774a-a783-4619-824e-057182df9f26")
console.log(movies)
