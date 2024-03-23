import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../theme/index";
import { Cast, Loading, MoviesList } from "../components";
import {
  fallbackMoviePoster,
  getImage500,
  getMovieCreditsCall,
  getMovieDetailsCall,
  getSimilarMoviesCall,
} from "../api/moviedb";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

export default MovieScreen = () => {
  const { params: movieId } = useRoute();
  const navigation = useNavigation();

  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  const [isFavourite, toggleFavourite] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getMovieDetails = async () => {
      const [res1, res2, res3] = await Promise.all([
        getMovieDetailsCall(movieId),
        getMovieCreditsCall(movieId),
        getSimilarMoviesCall(movieId),
      ]);
      if (res1) {
        setMovie(res1);
      }
      if (res2 && res2.cast?.length > 0) {
        setCast(res2.cast);
      }
      if (res3 && res3.results?.length > 0) {
        setSimilarMovies(res3.results);
      }
      setLoading(false);
    };
    getMovieDetails();
  }, [movieId]);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <View className="w-full justify-center">
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4 top-2">
          <TouchableOpacity
            style={styles.background}
            className="rounded-xl px-1 py-1"
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            className="px-1 py-1"
            onPress={() => toggleFavourite((favourite) => !favourite)}
          >
            <HeartIcon size={35} color={isFavourite ? "red" : "white"} />
          </TouchableOpacity>
        </SafeAreaView>
        {loading ? (
          <Loading />
        ) : (
          <View>
            <Image
              source={{
                uri: getImage500(movie.poster_path) || fallbackMoviePoster,
              }}
              className=""
              style={{ width, height: height * 0.55 }}
            />
            <LinearGradient
              colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
              style={{ width, height: height * 0.4 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0"
            />
          </View>
        )}
      </View>
      <View
        style={{
          marginTop: -(height * 0.09),
        }}
        className="space-y-3"
      >
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movie.title}
        </Text>

        <Text className="text-neutral-400 font-semibold text-base text-center">
          {movie.status} • {movie.release_date?.split("-")[0] ?? ""} •{" "}
          {movie.runtime} min
        </Text>

        <View className="flex-row justify-center mx-4 space-x-2">
          {movie?.genres?.map((genre, index) => {
            return (
              <Text
                className="text-neutral-400 font-semibold text-base text-center"
                key={genre.id}
              >
                {genre.name} {movie?.genres?.length != index + 1 ? " •" : ""}
              </Text>
            );
          })}
        </View>

        <Text className="text-neutral-400 mx-4 tracking-wide">
          {movie?.overview}
        </Text>
      </View>

      <Cast cast={cast} navigation={navigation} />

      <MoviesList
        title="Similar Movie"
        data={similarMovies}
        hideSeeAllButton={true}
      />
    </ScrollView>
  );
};
