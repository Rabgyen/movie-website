import { createContext, useState, useEffect, useContext} from "react"; 

const SaveMovieContext = createContext();

export const useSaveMovieContext = () => useContext(SaveMovieContext);

export const SaveMovieContextProvider = ({children}) => {
    const [savedMovie, setSaveMovie] = useState([]);

    useEffect(() => {
        const storedSaveMovies = localStorage.getItem('savedMovie');

        if(storedSaveMovies) setSaveMovie(JSON.parse(storedSaveMovies));
    },[]);

    useEffect(() => {
        localStorage.setItem("savedMovie",JSON.stringify(savedMovie))
    },[savedMovie]);

    const addToSave = (movie) => {
        setSaveMovie(prev => [...prev, movie])
    }

    const removeFromSave = (movieId) => {
        setSaveMovie(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isSavedMovie = (movieId) => {
        return savedMovie.some(movie => movie.id === movieId)
    }

    const value = {
        savedMovie,
        addToSave,
        removeFromSave,
        isSavedMovie
    }

    return <SaveMovieContext value={value}>
        {children}
    </SaveMovieContext>
    

}
