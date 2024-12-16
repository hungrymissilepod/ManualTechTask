import { QuizQuestion } from "@/types/QuizQuestion";
import { StyleSheet, Image, Text, View, useWindowDimensions } from "react-native";
import { useState } from "react";
import { Sizes } from "@/constants/Sizes";
import { PrimaryButton } from "../PrimaryButton/PrimaryButton";
import { indexOfSelectedAnswer } from '@/reducers/quiz';
import { QuizText } from "./QuizText";

export default function QuizTextType({ question, onCTAPressed }: { question: QuizQuestion, onCTAPressed: CallableFunction }) {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(indexOfSelectedAnswer(question));
  const onTap = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <View style={{ width, flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <View style={{ alignSelf: 'stretch', paddingHorizontal: Sizes.paddingHorizontal }}>
        {question.options.map((item, index) => {
          return <QuizText
            key={item.value.toString()}
            value={item.value.toString()}
            selected={currentIndex == index}
            onPress={() => { onTap(index); }}
          />
        })}
      </View>

      <View style={[styles.button, currentIndex == -1 ? styles.disabledButton : null, { width }]}>
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
}


const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    paddingHorizontal: Sizes.paddingHorizontal,
  },
  button: {
    paddingHorizontal: Sizes.paddingHorizontal
  },
  disabledButton: {
    opacity: 0.2,
  },
});