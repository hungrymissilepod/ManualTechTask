import { QuizQuestion } from "@/types/QuizQuestion";
import { StyleSheet, Image, Text, View, useWindowDimensions } from "react-native";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { QuestionTypeImage, QuestionTypeText } from "@/constants/QuestionType";
import { Sizes } from "@/constants/Sizes";
import QuizImageType from "./QuizImageType";

export const QuizSection = ({ question, onCTAPressed }: { question: QuizQuestion, onCTAPressed: CallableFunction }) => {
  const { width } = useWindowDimensions();

  const questionType = (question: QuizQuestion) => {
    if (question.type == QuestionTypeImage) {
      return <QuizImageType question={question} onCTAPressed={onCTAPressed} />
    } else if (question.type == QuestionTypeText) {
      return textType(question);
    }
    return null;
  }

  const textType = (question: QuizQuestion) => {
    return (
      <View style={{ alignSelf: 'stretch', paddingHorizontal: Sizes.paddingHorizontal }}>
        {question.options.map((item) => {
          return <View
            style={styles.textBorder}
            key={item.value.toString()} >
            <ThemedText style={styles.text} type='title'>{item.value.toString().toUpperCase()}</ThemedText>
          </View>;
        })}
      </View>
    );
  };

  return (
    <View style={{ width, alignItems: 'center' }}>
      <ThemedText type="title" style={styles.title}>{question.question}</ThemedText>
      {questionType(question)}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingHorizontal: Sizes.paddingHorizontal,
  },
  textBorder: {
    borderColor: Colors.tertiary,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 14,
  },
  // TODO: vertically center text in box
  text: {
    justifyContent: 'center',
    textTransform: 'capitalize',
    alignSelf: 'center',
  },
});