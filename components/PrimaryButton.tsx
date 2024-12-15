import { Colors } from "@/constants/Colors";
import { Pressable, Text, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";

export interface PrimaryButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  type?: "primary" | "secondary";
}

export const PrimaryButton = ({
  children,
  onPress,
  type = "primary",
}: PrimaryButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, styles[type]]}>
      <ThemedText type="default" style={styles.text}>
        {children}
      </ThemedText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    width: '100%',
    height: 52,
    justifyContent: 'center',
    marginBottom: 30,
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.secondary,
  },
  text: {
    textAlign: 'center',
    fontWeight: 500,
    color: '#fff'
  },
});