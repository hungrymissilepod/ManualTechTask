import { View, Text, StyleSheet, Animated, useWindowDimensions } from "react-native";
import { Colors } from "@/constants/Colors";
import { LearnMore } from "@/types/LearnMore";

export default function Paginator({ data, scrollX, currentIndex }: { data: LearnMore[], scrollX: Animated.Value, currentIndex: number }) {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flexDirection: 'row', height: 64, justifyContent: 'center' }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const color = scrollX.interpolate({
          inputRange,
          outputRange: [Colors.tertiary, Colors.primary, Colors.tertiary],
          extrapolate: 'clamp'
        });

        return (
          <Animated.View style={[styles.dot, { backgroundColor: color }]} key={i.toString()} />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  dot: {
    marginTop: 25,
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 8,
  }
});