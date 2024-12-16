import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Sizes } from "@/constants/Sizes";
import { i18n } from "@/services/i18n";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";

export default function QuizResult() {
  const { success } = useLocalSearchParams<{ success: string }>();

  const message = () => {
    if (success == 'true') {
      return (
        <ThemedText type="title" style={styles.text}>
          {i18n.t('quizResultSuccessPartOne')}
          <ThemedText type="title" style={[styles.text, { color: '#6D8A83' }]}>
            {i18n.t('quizResultSuccessPartTwo')}
          </ThemedText>
          {i18n.t('quizResultSuccessPartThree')}
        </ThemedText>
      );
    }
    return i18n.t('quizResultFailure');
  };

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={Colors.background} />
      <Stack.Screen
        options={{
          headerTitle: i18n.t('quizHeading'),
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
          children={<Text>{i18n.t('buttonOK')}</Text>}
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