import { StyleSheet, View, TouchableHighlight } from "react-native";
import { ThemedText } from "@/app-example/components/ThemedText";
import { Colors } from "@/constants/Colors";

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
  },
  selected: {
    backgroundColor: Colors.tertiary,
  }
});