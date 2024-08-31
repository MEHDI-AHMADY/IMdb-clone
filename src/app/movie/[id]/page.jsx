const API_KEY = process.env.API_KEY;

import axios from "axios";
import Image from "next/image";

export default async function MoviePage({ params }) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`
  );
  const movie = res.data;

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col lg:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="movie"
          className="rounded-lg"
          style={{maxWidth : "100%" , height : "100%"}}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3 ">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date released :</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">rating :</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
