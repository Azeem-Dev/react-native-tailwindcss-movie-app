import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import { Loading, MoviesList, TrendingMovies } from "../components";
import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";
import {
  fetchTopratedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../api/moviedb";

const ios = Platform.OS === ios;

export default HomeScreen = () => {
  const navigation = useNavigation();
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const multiApiCalls = async () => {
      const [res1, res2, res3] = await Promise.all([
        fetchTrendingMovies(),
        fetchUpcomingMovies(),
        fetchTopratedMovies(),
      ]);
      if (res1.results && res1.results?.length > 0) {
        setTrending(res1.results);
      }
      if (res2.results && res2.results?.length > 0) {
        setUpcoming(res2.results);
      }
      if (res3.results && res3.results?.length > 0) {
        setTopRated(res3.results);
      }
      // setUpcoming(res2.results);
      // setTopRated(res3);
    };
    multiApiCalls();
  }, []);

  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4 pt-2">
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Search");
            }}
          >
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 10,
          }}
        >
          <TrendingMovies movies={trending} />
          <MoviesList title="Upcoming" data={upcoming} />
          <MoviesList title="Top Rated" data={topRated} />
        </ScrollView>
      )}
    </View>
  );
};
