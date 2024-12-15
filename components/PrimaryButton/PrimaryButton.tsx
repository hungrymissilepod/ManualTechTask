import { Colors } from "@/constants/Colors";
import { Pressable, Text, StyleSheet } from "react-native";

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
      <Text style={styles.text}>
        {children}
      </Text>
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
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.secondary,
  },
  text: {
    fontSize: 18,
    fontWeight: 500,
    textAlign: 'center',
    color: '#fff'
  },
});