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

export default Cast = ({ cast, navigation }) => {
  return (
    <View className="my-6">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        data={cast}
        keyExtractor={(item) => {
          item;
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
                <Image className="rounded-2xl h-24 w-20" source={PersonImage} />
              </View>
              <Text className="text-white text-xs mt-1">
                {"Jhon Wick".length > 10
                  ? "Jhon Wick".slice(0, 10) + "..."
                  : "Jhon Wick"}
              </Text>
              <Text className="text-neutral-400 text-xs mt-1">
                {"Jhon Wick".length > 10
                  ? "Jhon Wick".slice(0, 10) + "..."
                  : "Jhon Wick"}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
