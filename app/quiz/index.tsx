import { BackIcon } from '@/components/HeaderIcons/BackIcon';
import { PrimaryButton } from '@/components/PrimaryButton/PrimaryButton';
import { ThemedText } from '@/components/ThemedText';
import { QuizSection } from '@/components/Quiz/QuizSection';
import { Colors } from '@/constants/Colors';
import { Sizes } from '@/constants/Sizes';
import { Stack } from 'expo-router';
import { Text, View, StyleSheet, StatusBar, FlatList, SafeAreaView } from 'react-native';
import QuizQuestions from '../../quiz.json';
import { useRef, useState } from 'react';

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<FlatList>(null);

  const scrollTo = () => {
    if (currentIndex < QuizQuestions.questions.length - 1) {
      scrollRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={Colors.background} />
      <Stack.Screen
        options={{
          headerTitle: 'Quiz',
          headerTitleAlign: 'center',
          animation: 'ios_from_right',
          headerLeft: () => <BackIcon />
        }}
      />

      <SafeAreaView style={{ flex: 1 }}></SafeAreaView>

      <View style={{}}>
        <FlatList
          data={QuizQuestions.questions}
          renderItem={({ item, index }) => <QuizSection question={item} />}
          keyExtractor={(item) => item.question}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEnabled={false}
          ref={scrollRef}
        />
      </View>

      <SafeAreaView style={{ flex: 1 }}></SafeAreaView>

      <View style={[{ flex: 0.5, paddingHorizontal: Sizes.paddingHorizontal, justifyContent: 'flex-end' }]}>
        <PrimaryButton
          type='primary'
          children={<Text>NEXT</Text>}
          onPress={scrollTo}
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
});