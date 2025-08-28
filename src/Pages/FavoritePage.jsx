import React from "react";
import { useFavoriteContext } from "../context/FavoriteContext";
import MovieCard from "../components/MovieCard";

const FavoritePage = () => {
  const { favoriteMovie } = useFavoriteContext();

  if (favoriteMovie) {
    return(
        <div className="flex flex-col w-full h-auto py-4 px-8 gap-4 overflow-hidden scroll">
        {favoriteMovie.length > 0 && <h1 className="text-white text-2xl">Your Favorite Movies: </h1>}
      <div>
        <div className="flex flex-wrap gap-10">
          {favoriteMovie && favoriteMovie.length > 0 ? (
            favoriteMovie.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <div className="h-screen w-full flex justify-center items-center py-4">
            <div className="border-2 border-[#60dbcb] flex flex-col max-w-[500px] h-[200px] bg-[#2b2b2b] text-white justify-center items-center py-4 px-8 rounded-xl">
            <h1>No Favorite Movies Yet!</h1>
            <p className="text-center text-sm">Add your favorite movies to the list and start watching them anytime, anywhere.</p>
        </div>
        </div>
          )}
        </div>
      </div>
    </div>
    )
  }
};

export default FavoritePage;
