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

export const getMovieDetailsCall = (movieId) => {
  let call = { ...apiUrlEnum.getMovieDetailsCall };
  call.endPoint = call.endPoint.replace("{ID}", movieId);
  return baseApiCall(call);
};

export const getMovieCreditsCall = (movieId) => {
  let call = { ...apiUrlEnum.getMovieCreditsCall };
  call.endPoint = call.endPoint.replace("{ID}", movieId);
  return baseApiCall(call);
};

export const getSimilarMoviesCall = (movieId) => {
  let call = { ...apiUrlEnum.getSimilarMoviesCall };
  call.endPoint = call.endPoint.replace("{ID}", movieId);
  return baseApiCall(call);
};

export const getPersonSimilarMoviesCall = (personId) => {
  let call = { ...apiUrlEnum.getPersonSimilarMoviesCall };
  call.endPoint = call.endPoint.replace("{ID}", personId);
  return baseApiCall(call);
};

export const searchMoviesCall = (query) => {
  let call = { ...apiUrlEnum.searchMoviesCall };
  call.endPoint = call.endPoint.replace("{QUERY}", query);
  return baseApiCall(call);
};

export const getImage500 = (imagePath) =>
  imagePath ? `https://image.tmdb.org/t/p/w500${imagePath}` : null;
export const getImage342 = (imagePath) =>
  imagePath ? `https://image.tmdb.org/t/p/w342${imagePath}` : null;
export const getImage185 = (imagePath) =>
  imagePath ? `https://image.tmdb.org/t/p/w185${imagePath}` : null;

export const fallbackMoviePoster =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fno-results_6134065&psig=AOvVaw2ApH5Zr_gHwuEuT9iMdMlw&ust=1711265322907000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOi76p_uiYUDFQAAAAAdAAAAABAE";
export const fallBackPersonImage =
  "https://www.freeiconspng.com/thumbs/person-icon/person-icon-8.png";
