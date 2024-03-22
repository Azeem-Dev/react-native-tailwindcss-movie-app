import { View, Text, Dimensions } from "react-native";
import * as Progress from "react-native-progress";
import { theme } from "../theme";

const { width, height } = Dimensions.get("window");

const Loading = () => {
  return (
    <View
      style={{ width, height }}
      className="absolute flex-row justify-center items-center"
    >
      <Progress.CircleSnail
        thickness={4}
        size={160}
        color={theme.background}
        animated={true}
        indeterminate={true}
      ></Progress.CircleSnail>
    </View>
  );
};

export default Loading;
