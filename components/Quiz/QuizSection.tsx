import { QuizQuestion } from "@/types/QuizQuestion";
import { StyleSheet, Image, Text, View, useWindowDimensions } from "react-native";
import { ThemedText } from "../ThemedText";
import { QuestionTypeImage, QuestionTypeText } from "@/constants/QuestionType";
import { Sizes } from "@/constants/Sizes";
import QuizImageType from "./QuizImageType";
import QuizTextType from "./QuizTextType";

export const QuizSection = ({ question, onCTAPressed }: { question: QuizQuestion, onCTAPressed: CallableFunction }) => {
  const { width } = useWindowDimensions();

  const questionType = (question: QuizQuestion) => {
    if (question.type == QuestionTypeImage) {
      return <QuizImageType question={question} onCTAPressed={onCTAPressed} />
    } else if (question.type == QuestionTypeText) {
      return <QuizTextType question={question} onCTAPressed={onCTAPressed} />
    }
    return null;
  }

  return (
    <View style={{ width, alignItems: 'center', }}>
      <ThemedText type="title" style={styles.title}>{question.question}</ThemedText>
      {questionType(question)}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingHorizontal: Sizes.paddingHorizontal,
    paddingBottom: 40.
  },
});