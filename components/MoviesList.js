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
import MoviePosterImage from "../assets/images/moviePoster2.jpg";

import { styles } from "../theme";

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
              onPress={() => navigation.push("Movie", item)}
            >
              <View className="space-y-1 mr-4">
                <Image
                  source={MoviePosterImage}
                  className="rounded-3xl"
                  style={{ width: width * 0.33, height: height * 0.22 }}
                />
                <Text className="text-neutral-300 ml-2">Something</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

