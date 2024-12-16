import { Colors } from "@/constants/Colors";
import { Image, TouchableHighlight, StyleSheet } from "react-native";

export const QuizImage = ({ display, selected, onPress }: { display: string, selected: boolean, onPress: CallableFunction }) => {
  return (
    <TouchableHighlight
      underlayColor='000'
      onPress={() => onPress()}>
      <Image
        style={[styles.image, selected == true ? styles.selected : null]}
        source={{ uri: display }}
      />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  selected: {
    backgroundColor: Colors.tertiary,
  }
});