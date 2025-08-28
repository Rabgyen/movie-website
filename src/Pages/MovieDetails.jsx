import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import demoImg from "../assets/demoImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faPlay,
  faHeart,
  faBookmark,
  faCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { movieDetails } from "../sources/tmdbApi";
import { movieCast } from "../sources/tmdbApi";
import { movieTrailer } from "../sources/tmdbApi";
import { useFavoriteContext } from "../context/FavoriteContext";

const MovieDetails = () => {
  const { id } = useParams();
  const [aboutMovie, setAboutMovie] = useState({});
  const [casts, setCasts] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [watchLater, setWatchLater] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [gotTrailer, setGotTrailer] = useState(false);

  const { isFavoriteMovie, addToFavoites, removeFromFavorite} = useFavoriteContext();

  const favorite = isFavoriteMovie(aboutMovie.id) 

  const favoriteOnClick = (e) => {
    e.preventDefault()
    if(favorite) removeFromFavorite(aboutMovie.id)
    else addToFavoites(aboutMovie)
  }

  useEffect(() => {
    const getMovieDetails = async () => {
      const movieData = await movieDetails(id);
      setAboutMovie(movieData);
    };
    getMovieDetails();
  }, [id]);

  useEffect(() => {
    const getCasts = async () => {
      const movieCasts = await movieCast(id);
      setCasts(movieCasts);
    };
    getCasts();
  },[id]);

  useEffect(() => {
    const getTrailer = async () => {
      const url = await movieTrailer(id);
      setTrailerUrl(url);
      setGotTrailer(!!url);
    };
    getTrailer();
  }, [id]);

  const isFavorite = () => {
    setFavorite((prev) => !prev);
  };

  const isWatchLater = () => {
    setWatchLater((prev) => !prev);
  };

  const notificationAppear = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    },3000);
  }

  
  

  if (!aboutMovie.id) {
    return (
      <div className="text-white  p-10 h-screen w-full bg-black">
        <div class="loader h-full w-full flex justify-center items-center">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full lg:h-screen sm:h-[600px] md:h-[700px] w-full text-white bg-black small-screen">
      <img
        src={
          aboutMovie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${aboutMovie.backdrop_path}`
            : demoImg
        }
        alt={aboutMovie.title}
        className="object-cover w-full h-full absolute top-0 left-0 opacity-20"
      />

      <div className="absolute top-0 flex flex-wrap justify-center w-full h-full py-8 px-4 bg-black/20 about-movie">
        <div className="flex flex-col items-center h-full gap-4 px-8">
          <div className="h-[495px] w-[330px] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={
                aboutMovie.poster_path
                  ? `https://image.tmdb.org/t/p/original${aboutMovie.poster_path}`
                  : demoImg
              }
              alt={aboutMovie.title}
              className="object-contain w-full h-full transition-transform duration-100 ease-in transform hover:scale-110"
            />
          </div>

          <div className="flex flex-col gap-8 ">
            <div className="flex items-center w-full gap-2">
              {gotTrailer ? <a
                href={trailerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] hover:drop-shadow-[0_0_20px_rgba(255,0,0,0.8)] cursor-pointer">
                  <FontAwesomeIcon icon={faPlay} />
                </div>
                <h1 className="cursor-default">Watch Trailer</h1>
              </a>: <div className="flex items-center gap-2 cursor-default"><div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] hover:drop-shadow-[0_0_20px_rgba(255,0,0,0.8)] cursor-default">
                  <FontAwesomeIcon icon={faCircleXmark} />
                </div>
                <h1>Trailer Not Available</h1>
                </div>}
            </div>
            <div className="flex w-full gap-8 ">
              <div className="text-center transition-all ease-in-out">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="cursor-pointer"
                  onClick={favoriteOnClick}
                  style={{ color: favorite ? "red" : "white" }}
                />
                <h1 className="cursor-default">Favorite</h1>
              </div>
              <div className="text-center" onClick={isWatchLater}>
                {watchLater ? (
                  <div>
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="cursor-pointer"
                    />{" "}
                    <h1 className="max-w-[100px]">Added to watch list</h1>
                  </div>
                ) : (
                  <div>
                    <FontAwesomeIcon
                      icon={faBookmark}
                      className="cursor-pointer"
                    />
                    <h1>Watch later</h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 min-w-[450px] small-description">
          <div className="flex flex-col gap-8 px-4 flex-1 flex-wrap">
            <h1 className=" text-6xl font-bold">{aboutMovie.title}</h1>

            <div className="flex gap-4">
              <button className="flex items-center justify-center gap-4 px-6 py-3 bg-[#33a092] text-white rounded-xl" onClick={notificationAppear} >
                <FontAwesomeIcon icon={faPlay} />
                Watch
              </button>
              <button className="flex items-center justify-center gap-4 px-6 py-2 bg-[#33a092] text-white rounded-xl" onClick={notificationAppear}>
                <FontAwesomeIcon icon={faArrowDown} />
                Download
              </button>
            </div>

            <div className="flex flex-col gap-4 text-white/80">
              <h1 className="text-2xl">Overview:</h1>
              <p className="text-sm">{aboutMovie.overview}</p>
            </div>

            <div className="flex flex-col gap-5 py-2 text-sm border-b-2 border-b-white/30 text-white/80">
              <p>Rating: {aboutMovie.vote_average}</p>
              <p>Released Date: {aboutMovie.release_date}</p>
              <p>
                Genre:{" "}
                {aboutMovie.genres && aboutMovie.genres.length > 0
                  ? aboutMovie.genres.map((g) => g.name).join(", ")
                  : "N/A"}
              </p>
              <p>Duration: {aboutMovie.runtime} mins</p>
              <p>Language: {aboutMovie.original_language?.toUpperCase()}</p>
            </div>

            <div className="flex flex-col gap-2 max-w-[600px]">
              <p>Cast: </p>
              <div className="flex flex-col h-[200px] overflow-auto gap-4">
                {casts.map((cast) => (
                  <CastDetails key={cast.cast_id || cast.id} cast={cast} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`absolute w-[500px] left-1/2 -translate-x-1/2 mt-4 flex items-center justify-center py-4 rounded-xl bg-[#2b2b2b] transition-opacity duration-500 ${showNotification ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={notificationAppear}>
        <p>Sorry! This movie is currently unavailable.</p>
      </div>
    </div>
  );
};

export default MovieDetails;

const CastDetails = ({ cast }) => {
  return (
    <div className="flex text-white h-16 items-center p-2 min-w-[180px] gap-4 bg-[#2b2b2b] rounded-md">
      <div className="h-14 w-14 rounded-full bg-gray-500 overflow-hidden sm:w-10 sm:h-10">
        {cast?.profile_path && (
          <img
            src={`https://image.tmdb.org/t/p/w185${cast.profile_path}`}
            alt={cast.name}
            className="object-cover h-full w-full rounded-full"
          />
        )}
      </div>
      <p className="md:text-sm">{cast?.name}</p>
    </div>
  );
};
