import { BackIcon } from '@/components/HeaderIcons/BackIcon';
import { QuizSection } from '@/components/Quiz/QuizSection';
import { Colors } from '@/constants/Colors';
import { router, Stack } from 'expo-router';
import { View, StyleSheet, StatusBar, FlatList, SafeAreaView } from 'react-native';
import QuizQuestions from '../../quiz.json';
import { useReducer, useRef, useState } from 'react';
import { reducer } from '@/reducers/quiz';

export default function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<FlatList>(null);
  const [state, dispatch] = useReducer(reducer, { questions: [] });

  const scrollTo = (index: number) => {
    if (index < 0) {
      return router.back();
    }

    scrollRef.current?.scrollToIndex({ index: index });
    setCurrentIndex(index);
  };

  const selectAnswer = (index: number) => {
    if (state.questions.length > currentIndex) {
      dispatch({
        type: 'UPDATE',
        question: {
          ...QuizQuestions.questions[currentIndex],
          selectedAnswer: QuizQuestions.questions[currentIndex].options[index].value
        },
      })
      return;
    }
    dispatch({
      type: 'ADD',
      question: {
        ...QuizQuestions.questions[currentIndex],
        selectedAnswer: QuizQuestions.questions[currentIndex].options[index].value
      },
    });

    // check if failure
    if (QuizQuestions.questions[currentIndex].options[index].isRejection) {
      console.log('failed the quiz!');
    }

    if (index > QuizQuestions.questions.length - 1) {
      return console.log('finished quiz! go to success screen!');
    }
  }

  return (
    <View style={styles.background}>
      <StatusBar backgroundColor={Colors.background} />
      <Stack.Screen
        options={{
          headerTitle: 'Quiz',
          headerTitleAlign: 'center',
          animation: 'ios_from_right',
          headerLeft: () => <BackIcon onPress={() => { scrollTo(currentIndex - 1) }} />
        }}
      />

      <SafeAreaView style={{ flex: 0.3 }}></SafeAreaView>

      <View style={{ flex: 1 }}>
        <FlatList
          data={QuizQuestions.questions}
          renderItem={({ item, index }) => {
            return <QuizSection question={item} onCTAPressed={(index: number) => {
              console.log(`onCTAPressed: ${index}`);
              selectAnswer(index)
              scrollTo(currentIndex + 1);
            }} />
          }}
          keyExtractor={(item) => item.question}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEnabled={false}
          ref={scrollRef}
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