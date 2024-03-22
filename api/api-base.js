import axios from "axios";
import { accessToken } from "../constants";

export default baseApiCall = async ({ endPoint, method = "GET", params }) => {
  const options = {
    method: method,
    url: endPoint,
    params: params ? params : {},
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error:", error);
    return {};
  }
};

