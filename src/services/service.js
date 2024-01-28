const API_KEY= import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https:api.themoviedb.org/3";

const endpoints = {
    popular: `${baseUrl}/movie/popular?api_key = ${API_KEY}`,
    topRated: `${baseUrl}/movie/top_rated?api_key = ${API_KEY}`,
    comedy: `${baseUrl}/search/movie?api_key = ${API_KEY}&language=en-US&query=comedy&page=1&include_adult=false`,
    trending: `${baseUrl}/movie/popular?api_key = ${API_KEY}&language=en-US&page=2`,
    upcoming: `${baseUrl}/movie/upcoming?api_key=${API_KEY}`,
}

export default endpoints;