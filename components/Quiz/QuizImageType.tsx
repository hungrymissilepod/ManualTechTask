import { QuizQuestion } from "@/types/QuizQuestion";
import { StyleSheet, Image, Text, View, useWindowDimensions, FlatList } from "react-native";
import { useState } from "react";
import { QuizImage } from "./QuizImage";
import { Sizes } from "@/constants/Sizes";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { indexOfSelectedAnswer } from '@/reducers/quiz';

export default function QuizImageType({ question, onCTAPressed }: { question: QuizQuestion, onCTAPressed: CallableFunction }) {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(indexOfSelectedAnswer(question));
  const onTap = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <View style={{ width, flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <FlatList
        data={question.options}
        renderItem={(item) => {
          return <QuizImage
            display={item.item.display}
            selected={currentIndex == item.index}
            onPress={() => { onTap(item.index); }}
          />
        }}
        keyExtractor={(item) => item.value.toString()}
        numColumns={3}
        removeClippedSubviews={true}
        scrollEnabled={false}
      />

      <View style={[styles.button, currentIndex == -1 ? styles.disabledButton : null, { width, justifyContent: 'flex-end' }]}>
        <PrimaryButton
          type='primary'
          children={<Text>NEXT</Text>}
          onPress={() => {
            if (currentIndex != -1) {
              onCTAPressed(currentIndex);
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: Sizes.paddingHorizontal
  },
  disabledButton: {
    opacity: 0.2,
  }
});