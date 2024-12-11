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
      <Text style={[styles.text]}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 52,
    justifyContent: 'center',
    marginBottom: 30,
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  primary: {
    backgroundColor: '#7E0707',
  },
  secondary: {
    backgroundColor: '#0B3B3C',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff'
  },
});