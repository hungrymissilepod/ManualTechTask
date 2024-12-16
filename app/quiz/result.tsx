import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Sizes } from "@/constants/Sizes";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";

export default function QuizResult() {
  const { success } = useLocalSearchParams<{ success: string }>();

  const message = () => {
    if (success == 'true') {
      return (
        <ThemedText type="title" style={styles.text}>
          Great news! We have the perfect treatment for your hair loss. Proceed to
          <ThemedText type="title" style={[styles.text, { color: '#6D8A83' }]}>
            {` www.manual.co`}
          </ThemedText>
          , and prepare to say hello to your new hair!
        </ThemedText>
      );
    }
    return 'Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.';
  };

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={Colors.background} />
      <Stack.Screen
        options={{
          headerTitle: 'Quiz',
          headerTitleAlign: 'center',
          animation: 'ios_from_right',
          headerBackVisible: false
        }}
      />
      <SafeAreaView style={{ flex: 0.3 }}></SafeAreaView>
      <ThemedText type="title" style={styles.text}>
        {message()}
      </ThemedText>
      <View style={styles.button}>
        <PrimaryButton
          type='primary'
          children={<Text>OK</Text>}
          onPress={() => {
            router.dismissAll();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  text: {
    flex: 1,
    paddingHorizontal: Sizes.paddingHorizontal,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'flex-end',
    paddingHorizontal: Sizes.paddingHorizontal
  },
});