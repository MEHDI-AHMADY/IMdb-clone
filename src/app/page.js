const API_KEY = process.env.API_KEY;
import axios from "axios";
import Results from "@/components/Results/Results";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";

  const res = await axios.get(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en_US&page=7`
  );

  if (res.statusText !== "OK") {
    throw new Error("Failed to Fetch Data.");
  }

  const results = await res.data.results;

  return (
      <div>
        <Results results={results} />
      </div>
  );
}
