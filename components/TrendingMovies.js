import { View, Text, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Carousel from "react-native-snap-carousel";
import MovieCard from "./MovieCard";

const { width, height } = Dimensions.get("window");

export default TrendingMovies = ({ movies }) => {
  const navigation = useNavigation();

  const hanldePress = (movie) => {
    navigation.navigate("Movie", movie);
  };

  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <Carousel
        data={movies}
        renderItem={({ item }) => {
          return (
            <MovieCard item={item} handlePress={hanldePress.bind(this, item)} />
          );
        }}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{
          display: "flex",
          alignItems: "center",
        }}
      />
    </View>
  );
};
