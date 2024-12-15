import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Text, type TextProps, StyleSheet } from 'react-native';


export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'display' | 'title' | 'body' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'display' ? styles.display : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'body' ? styles.body : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  display: {
    fontSize: 70,
    lineHeight: 80,
    letterSpacing: -3,
    fontWeight: 500,
    color: Colors.primary,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  body: {
    fontSize: 19,
    lineHeight: 30,
    fontWeight: 400,
    color: Colors.primary,
  },
  link: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 30,
    textDecorationLine: 'underline',
    color: Colors.primary,
  },
});
