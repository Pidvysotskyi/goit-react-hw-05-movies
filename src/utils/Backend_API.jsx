import axios from 'axios';

const API_KEY = '957ce6bf29368070d7b55378b1d4459e';

export function getTrending() {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data.results)
    .catch(error => console.log(error));
}
export function getByQuery(query) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    )
    .then(response => response.data.results)
    .catch(error => console.log(error));
}
export function getMovieDetails(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
    .then(response => response.data)
    .catch(error => console.log(error));
}
export function getMovieCredits(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then(response => response.data)
    .catch(error => console.log(error));
}
export function getMovieReviews(movieId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(response => response.data.results)
    .catch(error => console.log(error));
}
