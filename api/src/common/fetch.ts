import axios from "axios";
import { env } from "./env";

const { MOVIE_API_ENDPOINT, MOVIE_API_READ_TOKEN } = env;

const cli = axios.create({
  baseURL: MOVIE_API_ENDPOINT,
  headers: {
    Authorization: `Bearer ${MOVIE_API_READ_TOKEN}`
  },
});

type Endpoint = "/movie" | "/discover/movie"
type Method = 'get' | 'post' | 'put' | 'delete'
type Options = { method: Method, body: any }

export const fetcher = async (endpoint: Endpoint, opt?: Options) => {
  const { data } = await cli.request({
    url: endpoint,
    method: opt?.method ?? "get",
    data: opt?.body
  });

  return data;
}
