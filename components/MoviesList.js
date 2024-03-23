import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../theme";
import { fallbackMoviePoster, getImage185 } from "../api/moviedb";

export default MoviesList = ({ title, data, hideSeeAllButton = false }) => {
  const { width, height } = Dimensions.get("window");

  const navigation = useNavigation();

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>

        {!hideSeeAllButton && (
          <TouchableOpacity>
            <Text style={styles.text} className="text-lg">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => navigation.push("Movie", item.id)}
            >
              <View className="space-y-1 mr-4">
                <Image
                  source={{
                    uri: getImage185(item.poster_path) || fallbackMoviePoster,
                  }}
                  className="rounded-3xl"
                  style={{ width: width * 0.33, height: height * 0.22 }}
                />
                <Text className="text-neutral-300 ml-2">
                  {item.title?.length > 14
                    ? item.title?.slice(0, 14) + "..."
                    : item.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};
