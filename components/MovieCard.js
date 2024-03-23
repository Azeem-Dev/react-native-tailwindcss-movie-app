import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { getImage500 } from "../api/moviedb";

const { width, height } = Dimensions.get("window");
export default MovieCard = ({ item, handlePress }) => {
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Image
        source={{ uri: getImage500(item.poster_path) }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};
