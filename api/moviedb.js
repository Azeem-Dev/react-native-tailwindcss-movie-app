import baseApiCall from "./api-base";
import { apiUrlEnum } from "./api-url-enum";

export const fetchTrendingMovies = () => {
  return baseApiCall(apiUrlEnum.trendingMoviesCall);
};

export const fetchUpcomingMovies = () => {
  return baseApiCall(apiUrlEnum.upcomingMoviesCall);
};

export const fetchTopratedMovies = () => {
  return baseApiCall(apiUrlEnum.topRatedMoviesCall);
};

export const getImage500 = imagePath => imagePath ?  `https://image.tmdb.org/t/p/w500${imagePath}`: null;
export const getImage342 = imagePath => imagePath ?  `https://image.tmdb.org/t/p/w342${imagePath}`: null;
export const getImage185 = imagePath => imagePath ?  `https://image.tmdb.org/t/p/w185${imagePath}`: null;