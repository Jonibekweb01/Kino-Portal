import axios from "axios";

export const API_KEY = 'c7939dff7821a7120fe1c75e54498f24'
export const baseURL = 'https://api.themoviedb.org/3/';
export const baseImgURL = 'https://image.tmdb.org/t/p/w500/'

export const apis = {
    getPopularMovies: () => axios.get(baseURL + "movie/popular?" + "api_key=" + API_KEY),
    getLatestMovies: () => axios.get(baseURL + "movie/top_rated?" + "api_key=" + API_KEY),
    getMovie: (id) => axios.get(baseURL + "movie/" + id, {
        params: {
            api_key: API_KEY,
        }
    }),
    getMovieCredits: (id) => axios.get(baseURL + `/movie/${id}/credits`, {
        params: {
            api_key: API_KEY,
        },
    }),
    getMovieRek: (id) => axios.get(baseURL + `/movie/${id}/recommendations`, {
        params: {
            api_key: API_KEY,
        },
    }),
    // getPersons: (id) => axios.get(baseURL + `/person/${id}/movie_credits`, {
    //     params: {
    //         api_key: API_KEY,
    //     },
    // }),
}