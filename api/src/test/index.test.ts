import { fetcher } from "src/common/fetch";

const movies = await fetcher("/movie/popular")
console.log(movies);
