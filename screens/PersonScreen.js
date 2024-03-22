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
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles } from "../theme";
import PersonImage from "../assets/images/personImage.jpg";
import { Loading, MoviesList } from "../components";
const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";
const verticalMargin = ios ? "" : "my-3";

export default PersonScreen = () => {
  const navigation = useNavigation();
  const [isFavourite, toggleFavourite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(true);

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
              source={PersonImage}
              style={{ height: height * 0.43, width: width * 0.74 }}
            />
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-3xl text-white font-bold text-center">
            Keanu Reeves
          </Text>
          <Text className="text-base text-neutral-500  text-center">
            London, United Kingdom
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
            <Text className="text-neutral-300 text-sm">Male</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-4  items-center">
            <Text className="text-white font-semibold">Birthday</Text>
            <Text className="text-neutral-300 text-sm">1964/09/02</Text>
          </View>
          <View className="border-r-2 border-r-neutral-400 px-4 items-center">
            <Text className="text-white font-semibold">Known for</Text>
            <Text className="text-neutral-300 text-sm">Acting</Text>
          </View>
          <View className="px-4 items-center">
            <Text className="text-white font-semibold">Popularity</Text>
            <Text className="text-neutral-300 text-sm">64.33</Text>
          </View>
        </View>

        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            tincidunt nunc pulvinar sapien. Dolor purus non enim praesent
            elementum facilisis leo. Eget aliquet nibh praesent tristique magna
            sit amet. Nec ullamcorper sit amet risus nullam. Praesent elementum
            facilisis leo vel fringilla. Vitae suscipit tellus mauris a diam.
            Sed pulvinar proin gravida hendrerit lectus. Viverra vitae congue eu
            consequat. Cursus eget nunc scelerisque viverra mauris. Vitae
            ultricies leo integer malesuada nunc vel risus. Elementum sagittis
            vitae et leo duis ut. Morbi blandit cursus risus at. Nunc pulvinar
            sapien et ligula ullamcorper malesuada. Nunc id cursus metus
            aliquam. Rhoncus mattis rhoncus urna neque. Interdum velit laoreet
            id donec ultrices tincidunt. Vitae tortor condimentum lacinia quis
            vel eros donec ac. Donec et odio pellentesque diam volutpat commodo
            sed egestas. Turpis in eu mi bibendum. Sed vulputate odio ut enim
            blandit volutpat maecenas volutpat blandit. Porta nibh venenatis
            cras sed felis eget velit aliquet sagittis. Nisl rhoncus mattis
            rhoncus urna neque viverra. Pharetra vel turpis nunc eget lorem
            dolor sed. Faucibus et molestie ac feugiat.
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
