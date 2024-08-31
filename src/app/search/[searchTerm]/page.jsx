import Results from "@/components/Results/Results";
import axios from "axios";

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;

  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en_US&page=1&include_adult=false`
  );

  const results = res.data.results;

  return (
    <div>
        {results && results.length === 0 && (<h1 className="text-center pt-6">No result found...</h1>)}

        {results && <Results results={results} />}
    </div>
  );
}
