import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Button, TouchableHighlight } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
      }}
    >
    </Stack>
  );
}
