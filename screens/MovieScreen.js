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
import MoviePoster from "../assets/images/moviePoster2.jpg";
import { Cast, Loading, MoviesList } from "../components";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";

export default MovieScreen = () => {
  const { params: item } = useRoute();
  const navigation = useNavigation();

  const [isFavourite, toggleFavourite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {}, [item]);
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
              source={MoviePoster}
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
          movie name
        </Text>

        <Text className="text-neutral-400 font-semibold text-base text-center">
          Released • 2020 • 170 min
        </Text>

        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Action •
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Thrill •
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Comedy
          </Text>
        </View>

        <Text className="text-neutral-400 mx-4 tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
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
