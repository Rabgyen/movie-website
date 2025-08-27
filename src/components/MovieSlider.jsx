import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


const MovieSlider = ({ movies }) => {

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 4000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
     <div
    ref={sliderRef}
    className="keen-slider w-full h-[600px] relative overflow-hidden rounded-xl cursor-pointer"
  >
    {movies.map((movie) => (
      <Link to={`/movie/${movie.id}`} key={movie.id}>
        <div className="relative w-full h-full keen-slider__slide">
          <div className="absolute p-3 text-xs text-white rounded shadow-lg bg-white/10 backdrop-blur-md-xl top-5 left-5">
            Popular Movies 🔥
          </div>
          <img
            src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
            className="object-cover w-full h-full"
            alt={movie.title}
          />
          <div className="absolute flex flex-col w-full gap-2 p-4 h-auto text-white bottom-4">
            <h2 className="text-2xl h-[50px] flex items-center font-semibold">{movie.title}</h2>
            <p className="max-w-[500px] h-auto mb-3 text-[14px]">{movie.overview}</p>
            <div className="flex gap-4">
              <button className="inline-flex items-center gap-2 px-4 py-2 text-sm text-black transition bg-white rounded-full hover:bg-black hover:text-white">
                <FontAwesomeIcon icon={faPlay} />
                Watch
              </button>
              <button className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white transition bg-black rounded-full hover:bg-white hover:text-black">
                <FontAwesomeIcon icon={faArrowDown} />
                Download
              </button>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
  );
};

export default MovieSlider;
