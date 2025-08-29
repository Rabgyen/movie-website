const API_KEY = "c5507bc4d27fea7fedf1490ee7868415";
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`
    );
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("Error fetching movies:", err);
    return [];
  }
};

export const getPopularMovies = async () => {
  try{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    return data.results;
  }catch(err){
    console.error(err);
    return([]);
  }
}

export const searchMovies = async (searchQuery) => {
  try{
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(searchQuery)}&page=1`);
    const data = await response.json();
    return data.results;
  }
  catch(err){
    console.error(err);
    return([]);
  }
}

export const movieDetails = async (id) => {
  try{
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    return data;
  }catch(err){
    console.log(err);
    return ([]);
  }
}


export const movieCast = async(id) => {
  try{
    const response = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    const data = await  response.json();
    return data.cast;
  }catch(err){
    console.log(err);
    return([]);
  }
}


export const movieTrailer = async(id) => {
  try{
    const response = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en_US`);
    const data = await response.json();
    const trailer = data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube"
    );
    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
  }catch(err){
    console.log(err);
    return([]);
  }
}