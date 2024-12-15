import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Text, type TextProps, StyleSheet } from 'react-native';


export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'display' | 'title' | 'body' | 'link' | 'label';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'body',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'display' ? styles.display : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'body' ? styles.body : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'label' ? styles.label : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  display: {
    fontSize: 70,
    lineHeight: 80,
    letterSpacing: -3,
    fontWeight: 500,
    color: Colors.primary,
  },
  title: {
    color: Colors.primary,
    fontSize: 28,
    fontWeight: 500,
    lineHeight: 40,
    paddingBottom: 22,
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
  label: {
    fontSize: 12,
    fontWeight: 700,
    lineHeight: 15,
    letterSpacing: 1.5,
    color: '#6D8A83',
  },
});
