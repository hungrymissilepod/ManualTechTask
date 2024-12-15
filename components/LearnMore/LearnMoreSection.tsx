import { StyleSheet, Text, Image, View, useWindowDimensions, ImageSourcePropType } from "react-native";
import React from 'react';
import { Sizes } from "@/constants/Sizes";
import { LearnMore } from "@/types/LearnMore";
import { ThemedText } from "../ThemedText";

function idToString(id: number) {
  if (Number.length > 1) return id.toString();
  return id.toString().padStart(2, '0');
}

export const LearnMoreSection = ({ learnMore }: { learnMore: LearnMore }) => {
  const { width } = useWindowDimensions();
  const img = learnMoreImages[learnMore.id - 1];
  const idString = idToString(learnMore.id);

  return (
    <View style={[styles.container, { width }]}>
      <View style={{ flexDirection: learnMore.id % 1 == 0 ? 'row' : 'row-reverse', alignItems: 'center' }}>
        <Image style={styles.image} source={img} />
        <Text style={styles.idText}>{idString}</Text>
      </View>
      <View style={{ paddingTop: 40 }}>
        <ThemedText type="label" style={{ paddingBottom: 10 }}>{learnMore.header}</ThemedText>
        <ThemedText type="title">{learnMore.title}</ThemedText>
        <ThemedText type="body">{learnMore.subtitle}</ThemedText>
      </View>
    </View >
  );
}

// Load image based on [id]
const learnMoreImages: ImageSourcePropType[] = [
  require('@/assets/images/hairLossInfoIllustration.png'),
  require('@/assets/images/erectileDysfunctionInfoIllustration.png'),
]

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Sizes.paddingHorizontal,
    justifyContent: 'flex-end'
  },
  image: {
    width: 175,
    height: 200,
    borderRadius: 15,
  },
  idText: {
    zIndex: -1,
    right: 20,
    color: 'white',
    fontWeight: 500,
    fontSize: 150,
    lineHeight: 180,
    letterSpacing: -2,
    textAlign: 'right'
  },
});