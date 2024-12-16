import { Link, router } from 'expo-router';
import { PrimaryButton } from '../components/PrimaryButton/PrimaryButton';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { Sizes } from '@/constants/Sizes';
import { setupI18nConfig, i18n } from '@/services/i18n';

setupI18nConfig();

export default function App() {
  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={Colors.tertiary} />
      <View style={[styles.container, { paddingTop: 20, justifyContent: 'center' }]} >
        <Image width={170} height={170} source={require('../assets/images/manual-logo.png')} />
      </View>

      <View style={styles.container} >
        <ThemedText type='display' style={styles.heading}>{i18n.t('landingTitle')}</ThemedText>
        <ThemedText type='body' style={styles.body}>{i18n.t('landingBody')}</ThemedText>
      </View>

      <View style={[styles.container, styles.ctaContainer]} >
        <Link href={'/learnMore'} style={styles.learnMoreText}>
          <ThemedText type='link'>{i18n.t('landingLearnMore')}</ThemedText>
        </Link>
        <PrimaryButton
          type='secondary'
          onPress={() => { router.push('/quiz') }}
          children={
            <Text>{i18n.t('landingCTA')}</Text>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.tertiary,
    paddingHorizontal: Sizes.paddingHorizontal,
  },
  container: {
    flex: 1,
  },
  ctaContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  heading: {
    paddingVertical: 20,
    textAlign: 'center',
    color: Colors.primary,
  },
  body: {
    textAlign: 'center',
  },
  learnMoreText: {
    paddingBottom: 20,
  }
});
