import { Link, router } from 'expo-router';
import { PrimaryButton } from '../components/PrimaryButton/PrimaryButton';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { Sizes } from '@/constants/Sizes';

/*
TODOS:
- Use localisation for strings rather than harcoding them?
- Write unit tests
- Write UI tests
*/

export default function App() {
  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={Colors.tertiary} />
      <View style={[styles.container, { paddingTop: 20, justifyContent: 'center' }]} >
        <Image width={170} height={170} source={require('../assets/images/manual-logo.png')} />
      </View>

      <View style={styles.container} >
        <ThemedText type='display' style={styles.heading} >Be good to yourself</ThemedText>
        <ThemedText type='body' style={styles.body}>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</ThemedText>
      </View>

      <View style={[styles.container, styles.ctaContainer]} >
        <Link href={'/learnMore'} style={styles.learnMoreText}>
          <ThemedText type='link'>LEARN MORE</ThemedText>
        </Link>
        <PrimaryButton
          type='secondary'
          onPress={() => { router.push('/quiz') }}
          children={
            <Text>TAKE THE QUIZ</Text>
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
