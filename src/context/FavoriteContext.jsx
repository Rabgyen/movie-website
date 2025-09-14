import { createContext, useState, useContext, useEffect } from "react";

const FavoriteContext = createContext();

export const useFavoriteContext = () => useContext(FavoriteContext);

export const FavoriteMovieProvider = ({ children }) => {
  const [favoriteMovie, setFavoriteMovie] = useState(() => {
    const storedFavs = localStorage.getItem("favoriteMovie");
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  useEffect(() => {
    localStorage.setItem("favoriteMovie", JSON.stringify(favoriteMovie));
  }, [favoriteMovie]);

  const addToFavorites = (movie) => {
    setFavoriteMovie((prev) => [...prev, movie]);
  };

  const removeFromFavorite = (movieId) => {
    setFavoriteMovie((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavoriteMovie = (movieId) => favoriteMovie.some((movie) => movie.id === movieId);

  const value = {
    favoriteMovie,
    addToFavorites,
    removeFromFavorite,
    isFavoriteMovie,
  };

  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
};
