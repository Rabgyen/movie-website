import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getMovies, getPopularMovies ,searchMovies } from "../sources/tmdbApi";
import MovieSlider from "../components/MovieSlider";
import Footer from "../components/Footer";
import { faPlay } from "@fortawesome/free-solid-svg-icons";


const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchedMovie, setSearchedMovie] = useState("");
  const [searched, setSearched] = useState(true);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
  const PopularMovies = async () => {
    const loadPopularMovies = await getPopularMovies();
    setPopularMovies(loadPopularMovies);
  }
  PopularMovies();
}, []);

  useEffect(() => {
    const loadMovies = async () => {
      const discoverMovies = await getMovies();
      setMovies(discoverMovies);
    }
    loadMovies();
  },[])

   const handleSearch = async (searchQuery) => {
      const searchedMovies = await searchMovies(searchQuery);
      setMovies(searchedMovies);
      setSearched(false)
      setSearchedMovie(searchQuery);
   }

  return (
    <div className="flex flex-col w-full h-auto px-8 overflow-hidden scroll" style={{"-ms-overflow-style" : "none"}}>
      <NavBar onSearch={handleSearch} />
      {searched && popularMovies.length > 0 && <MovieSlider movies={popularMovies} />}
      {searched ? <h1 className="my-8 text-2xl font-medium text-white">You might like</h1>: <h1 className="my-8 text-2xl font-medium text-white">Showing results for '{searchedMovie}'</h1>}
      <div>
        <div className="flex flex-wrap justify-center gap-10">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 py-6">
        <h1 className="text-xl text-white font-bold">RSM Watch</h1>
        <FontAwesomeIcon icon={faPlay} className="text-[#60dbcb]"/>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
