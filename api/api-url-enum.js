import { apiKey, apiBaseUrl } from "../constants";

export const apiUrlEnum = {
  trendingMoviesCall: {
    endPoint: `${apiBaseUrl}/trending/all/day?language=en-US&api_key=${apiKey}`,
    method: "GET",
    params: {},
  },
  upcomingMoviesCall: {
    endPoint: `${apiBaseUrl}/movie/upcoming?language=en-US&page=1&api_key=${apiKey}`,
    method: "GET",
    params: {},
  },
  topRatedMoviesCall: {
    endPoint: `${apiBaseUrl}/movie/top_rated?language=en-US&page=1&api_key=${apiKey}`,
    method: "GET",
    params: {},
  },
  getMovieDetailsCall: {
    endPoint: `${apiBaseUrl}/movie/{ID}?language=en-US&api_key=${apiKey}`,
    method: "GET",
    params: {},
  },
  getMovieCreditsCall: {
    endPoint: `${apiBaseUrl}/movie/{ID}/credits?language=en-US&api_key=${apiKey}`,
    method: "GET",
    params: {},
  },
  getSimilarMoviesCall: {
    endPoint: `${apiBaseUrl}/movie/{ID}/similar?language=en-US&page=1&api_key=${apiKey}`,
    method: "GET",
    params: {},
  },
  getPersonSimilarMoviesCall: {
    endPoint: `${apiBaseUrl}/person/{ID}/movie_credits?language=en-US&api_key=${apiKey}`,
    method: "GET",
    params: {},
  },
  searchMoviesCall: {
    endPoint: `${apiBaseUrl}/search/movie?query={QUERY}&include_adult=false&language=en-US&page=1&api_key=${apiKey}`,
    method: "GET",
    params: {},
  },
};
