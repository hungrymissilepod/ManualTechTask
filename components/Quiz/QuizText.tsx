import { StyleSheet, TouchableHighlight } from "react-native";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "@/components/ThemedText";

export const QuizText = ({ value, selected, onPress }: { value: string, selected: boolean, onPress: CallableFunction }) => {
  return <TouchableHighlight
    underlayColor='000'
    style={[styles.container, selected == true ? styles.selected : null]}
    onPress={() => onPress()}>
    <ThemedText
      style={[styles.text,]}
      type='title'>{value.toString().toUpperCase()}
    </ThemedText>

  </TouchableHighlight>;
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.tertiary,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 14,
    paddingVertical: 8,
  },
  text: {
    justifyContent: 'center',
    textTransform: 'capitalize',
    alignSelf: 'center',
    paddingBottom: 0,
  },
  selected: {
    backgroundColor: Colors.tertiary,
  }
});