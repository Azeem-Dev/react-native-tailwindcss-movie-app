import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles } from "../theme";
import PersonImage from "../assets/images/personImage.jpg";
import { Loading, MoviesList } from "../components";
import {
  fallBackPersonImage,
  getImage342,
  getPersonSimilarMoviesCall,
} from "../api/moviedb";
const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";
const verticalMargin = ios ? "" : "my-3";

export default PersonScreen = () => {
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(true);

  const { params: person } = useRoute();

  useEffect(() => {
    const getPersonMovies = async () => {
      let res = await getPersonSimilarMoviesCall(person.id);
      if (res && res.cast?.length > 0) {
        setPersonMovies(res.cast);
      }
      setLoading(false);
    };
    getPersonMovies();
  }, [person]);

  const getGender = (id) => {
    switch (id) {
      case 0:
        return "Not set / not specified";
      case 1:
        return "Female";
      case 2:
        return "Male";
      case 3:
        return "Non-binary";
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      <SafeAreaView
        className={
          "z-20 w-full flex-row justify-between items-center px-4 " +
          verticalMargin
        }
      >
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

      <View>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: "gray",
            shadowRadius: 40,
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
            elevation: 4,
          }}
        >
          <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
            <Image
              source={{
                uri: getImage342(person.profile_path) || fallBackPersonImage,
              }}
              style={{ height: height * 0.43, width: width * 0.74 }}
            />
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-3xl text-white font-bold text-center">
            {person.name}
          </Text>
          <Text className="text-base text-neutral-500  text-center">
            {person.place_of_birth ?? "Unknown"}
          </Text>
        </View>

        <View
          className="mx-3 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full"
          style={{
            height: height * 0.07,
          }}
        >
          <View className="border-r-2 border-r-neutral-400 px-4 items-center">
            <Text className="text-white font-semibold">Gender</Text>
            <Text className="text-neutral-300 text-sm">
              {getGender(person.gender)}
            </Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-4  items-center">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-300 text-sm">
              {person.birthday ?? "UnKnown"}
            </Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-4 items-center">
            <Text className="text-white font-semibold">Known for</Text>
            <Text className="text-neutral-300 text-sm">
              {person.known_for_department}
            </Text>
          </View>
          <View className="px-4 items-center">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-300 text-sm">
              {person.popularity}
            </Text>
          </View>
        </View>

        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
            {person?.biography ?? "No biography found..."}
          </Text>
        </View>

        <MoviesList
          title="Movies"
          data={personMovies}
          hideSeeAllButton={true}
        />
      </View>
    </ScrollView>
  );
};
