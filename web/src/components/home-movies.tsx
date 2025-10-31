import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Button } from "./ui/button";
import { StarIcon } from "lucide-react";
import { useState } from "react";

type StatusEnum = "WATCHED" | "WANT_WATCH" | "IM_WATCHING"

type MovieProps = {
  movies: {
    title: string;
    photo: string;
    rate: number;
    genres: string[];
    marks: {
      isFavorite: boolean
      status: StatusEnum
    }
  }[]
}

export function HomeMovies({ movies }: MovieProps) {
  const [isFavorite, setIsFavorite] = useState(false) //tenho que ver como vou fazer essa questão do toggle
  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {movies.map((m) => (
          <CarouselItem key={m.title} className="pl-4 basis-auto group">
            <div className="w-[300px] h-[400px] relative rounded-md overflow-hidden">
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
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel >
  )
}
