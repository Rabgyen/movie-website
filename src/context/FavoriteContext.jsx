import { createContext, useState, useContext, useEffect } from "react";

const FavoriteContext = createContext()

export const useFavoriteContext = () => useContext(FavoriteContext)

export const FavoriteMovieProvider = ({children}) => {
    const [favoriteMovie, setFavoriteMovie] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favoriteMovie")

        if(storedFavs) setFavoriteMovie(JSON.parse(storedFavs))
    },[])

    useEffect(() => {
        localStorage.setItem("favoriteMovie", JSON.stringify(favoriteMovie))
    },[favoriteMovie])

    const addToFavoites = (movie) => {
        setFavoriteMovie(prev => [...prev, movie])
    }

    const removeFromFavorite = (movieId) => {
        setFavoriteMovie(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavoriteMovie = (movieId) => {
        return favoriteMovie.some(movie => movie.id === movieId)
    }

    const value = {
        favoriteMovie,
        addToFavoites,
        removeFromFavorite,
        isFavoriteMovie
    }

    return <FavoriteContext value={value}>
        {children}
    </FavoriteContext>
}