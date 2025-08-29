import { useSaveMovieContext } from '../context/SaveMovieContext' 
import MovieCard from '../components/MovieCard'

const SavedMovies = () => {

    const { savedMovie } = useSaveMovieContext();

  if (savedMovie) {
    return(
        <div className="flex flex-col w-full h-auto py-4 px-8 gap-4 overflow-hidden scroll">
        {savedMovie.length > 0 && <h1 className="text-white text-2xl">Your Favorite Movies: </h1>}
      <div>
        <div className="flex flex-wrap gap-10">
          {savedMovie && savedMovie.length > 0 ? (
            savedMovie.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <div className="h-screen w-full flex justify-center items-center py-4">
            <div className="border-2 border-[#60dbcb] flex flex-col max-w-[500px] h-[200px] bg-[#2b2b2b] text-white justify-center items-center py-4 px-8 rounded-xl">
            <h1>Your Watchlist Is Empty!</h1>
            <p className="text-center text-sm">Add your favorite movies to the list and start watching them anytime, anywhere.</p>
        </div>
        </div>
          )}
        </div>
      </div>
    </div>
    )
  }
}

export default SavedMovies
