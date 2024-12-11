import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View, Image } from 'react-native';

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
        <Text style={styles.learnMoreText}>LEARN MORE</Text>
        <Pressable onPress={() => { console.log('TAKE THE QUIZ') }} style={styles.button}>
          <Text style={styles.buttonText}>TAKE THE QUIZ</Text>
        </Pressable>
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
    paddingBottom: 20,
    textDecorationLine: 'underline',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 30,
    color: '#0B3B3C',
  }
});
