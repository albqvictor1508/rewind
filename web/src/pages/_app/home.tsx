import { HomeMovies, type MovieProps } from "@/components/home-movies";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/home")({
  component: RouteComponent,
});

type Categories = {
  name: string;
  movies: MovieProps[];
}[];

export function RouteComponent() {
  const categories: Categories = [
    {
      name: "Drama",
      movies: [
        {
          title: "Batman",
          rate: 4.4,
          photo: "/batman.jpg",
          genres: ["salve", "teste"],
          marks: {
            isFavorite: true,
            status: "WATCHED",
          },
        },
      ],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col px-8 space-y-12">
      {categories?.map((category) => (
        <div
          className="flex flex-col space-y-4"
          key={category.name + "-" + new Date()}
        >
          <h3 className="text-zinc-50 text-3xl font-bold">{category.name}</h3>
          <HomeMovies movies={category.movies} />
        </div>
      ))}
    </div>
  );
}
