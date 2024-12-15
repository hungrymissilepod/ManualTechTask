import { QuizQuestion } from "@/types/QuizQuestion";
import { StyleSheet, Image, Text, View, useWindowDimensions, FlatList, TouchableHighlight } from "react-native";
import { ThemedText } from "../ThemedText";
import { useState } from "react";
import { Colors } from "@/constants/Colors";
import { QuizImage } from "./QuizImage";
import { QuestionTypeImage, QuestionTypeText } from "@/constants/QuestionType";
import { Sizes } from "@/constants/Sizes";

export const QuizSection = ({ question }: { question: QuizQuestion }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useWindowDimensions();

  const onTap = (index: number) => {
    setCurrentIndex(index);
  };

  const questionType = (question: QuizQuestion) => {
    if (question.type == QuestionTypeImage) {
      return imageType(question);
    } else if (question.type == QuestionTypeText) {
      return textType(question);
    }
    return null;
  }

  const imageType = (question: QuizQuestion) => {
    return (
      <FlatList
        data={question.options}
        renderItem={(item) => <QuizImage display={item.item.display} selected={currentIndex == item.index} callback={() => { onTap(item.index); }} />}
        keyExtractor={(item) => item.value.toString()}
        numColumns={3}
        removeClippedSubviews={true}
      />
    );
  };

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