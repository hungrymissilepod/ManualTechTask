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
    /// If user has already answered this question, update
    if (state.questions.length > currentIndex) {
      updateAnswer(index);
    } else {
      addAnswer(index);
    }

    /// Scroll to next question
    if (currentIndex < QuizQuestions.questions.length - 1) {
      scrollTo(currentIndex + 1);
      return;
    }

    /// Navigate to result screen
    const success: boolean = state.questions.find(item => item.isRejection) === undefined;
    return router.push({ pathname: '/quiz/result', params: { success: success.toString() } });
  }

  const addAnswer = (index: number) => {
    dispatch({
      type: 'ADD',
      question: {
        ...QuizQuestions.questions[currentIndex],
        selectedAnswer: QuizQuestions.questions[currentIndex].options[index].value,
        isRejection: QuizQuestions.questions[currentIndex].options[index].isRejection,
      },
    });
  };

  const updateAnswer = (index: number) => {
    dispatch({
      type: 'UPDATE',
      question: {
        ...QuizQuestions.questions[currentIndex],
        selectedAnswer: QuizQuestions.questions[currentIndex].options[index].value,
        isRejection: QuizQuestions.questions[currentIndex].options[index].isRejection,
      },
    })
  };

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

      <View style={{ flex: 0.2 }}></View>

      <View style={{ flexDirection: 'column', flex: 1 }} >
        <FlatList
          data={QuizQuestions.questions}
          renderItem={({ item, index }) => {
            return <QuizSection question={item} onCTAPressed={(index: number) => {
              selectAnswer(index)
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
    </View >
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});