import { Link } from 'expo-router';
import { PrimaryButton } from '../components/PrimaryButton';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#A5B79F' />
      <View style={{ flex: 1, justifyContent: "center" }} >
        <Image width={170} height={170} source={require('../assets/images/manual-logo.png')} />
      </View>

      <View style={{ flex: 1 }} >
        <Text style={styles.heading} >Be good to yourself</Text>
        <Text style={styles.body}>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</Text>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', alignSelf: 'stretch', }} >
        <Link href={'/learnMore'} style={styles.learnMoreText}>
          <Text>LEARN MORE</Text>
        </Link>
        <PrimaryButton
          type='primary'
          onPress={() => { console.log('TAKE THE QUIZ') }}
          children={
            <Text>TAKE THE QUIZ</Text>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A5B79F',
    paddingHorizontal: 18,
  },
  heading: {
    paddingVertical: 20,
    fontSize: 70,
    lineHeight: 80,
    letterSpacing: -3,
    fontWeight: 500,
    textAlign: 'center',
    color: '#0B3B3C'
  },
  body: {
    fontSize: 19,
    lineHeight: 30,
    fontWeight: 400,
    textAlign: 'center',
    color: '#0B3B3C'
  },
  button: {
    width: '100%',
    height: 52,
    justifyContent: 'center',
    marginBottom: 30,
    backgroundColor: '#7E0707',
    borderRadius: 100,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff'
  },
  learnMoreText: {
    textDecorationLine: 'underline',
    paddingBottom: 20,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 30,
    color: '#0B3B3C',
  }
});
