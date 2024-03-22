import { apiKey,apiBaseUrl } from "../constants";

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
  }
};
