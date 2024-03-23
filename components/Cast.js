import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import PersonImage from "../assets/images/personImage.jpg";
import { fallBackPersonImage, getImage185 } from "../api/moviedb";

export default Cast = ({ cast, navigation }) => {
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        data={cast}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        renderItem={({ item: person }) => {
          return (
            <TouchableOpacity
              className="mr-4 items-center"
              onPress={() => {
                navigation.navigate("Person", person);
              }}
            >
              <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                <Image
                  className="rounded-2xl h-24 w-20"
                  source={{
                    uri:
                      getImage185(person.profile_path) || fallBackPersonImage,
                  }}
                />
              </View>
              <Text className="text-white text-xs mt-1">
                {person.character.length > 10
                  ? person.character.slice(0, 10) + "..."
                  : person.character}
              </Text>
              <Text className="text-neutral-400 text-xs mt-1">
                {person.name.length > 10
                  ? person.name.slice(0, 10) + "..."
                  : person.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
