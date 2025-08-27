import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const MovieCard = ({movie}) => {

  const [favorite, setFavorite] = useState(false);

  const FavoriteMovie = () => {
    setFavorite((prev) => !prev);
  }

  return (
    <div className="h-[420px] min-w-[250px] max-w-[360px] flex-1 rounded-xl text-white shadow-3xl border-2 border-black/10 overflow-hidden mb-4 relative">
      <Link to={`/movie/${movie.id}`}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-image" className="object-cover w-full h-full text-white transition duration-300 transform bg-gray-400 rounded-xl hover:scale-110" />
      </Link>
      <div className="absolute z-10 top-2 right-4 text-xl" onClick={FavoriteMovie} style={{color: favorite ? "red": "white"}}>
        <FontAwesomeIcon icon={faHeart}/>
      </div>
    </div>
  );
};

export default MovieCard;
