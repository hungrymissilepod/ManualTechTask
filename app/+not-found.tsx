
import { ThemedText } from '@/components/ThemedText';
import { i18n } from '@/services/i18n';
import { Link, Stack } from 'expo-router';
import { StatusBar, StyleSheet, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <StatusBar backgroundColor='white' />
      <View style={styles.container}>
        <ThemedText type="title">{i18n.t('404Title')}</ThemedText>
        <Link href="/" style={styles.link}>
          <ThemedText type="link">{i18n.t('404Body')}</ThemedText>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
