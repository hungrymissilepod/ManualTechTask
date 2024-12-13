import { StyleSheet, StatusBar, Text, Image, View, SafeAreaView, FlatList, useWindowDimensions, ViewToken } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { Button, TouchableHighlight, Animated } from "react-native";
import { PrimaryButton } from "@/components/PrimaryButton";
import DataJson from '../../data.json';
import React, { useState, useRef } from 'react';
import Paginator from '@/components/LearnMore/Paginator';


export const LearnMoreSection = ({ data }: { data: Data }) => {
  const { width } = useWindowDimensions();

  const img = learnMoreImages[data.id - 1];
  return (
    <View style={[{ paddingHorizontal: 18, width, justifyContent: 'flex-end' }]}>
      <View style={{ flexDirection: data.id == 1 ? 'row' : 'row-reverse', alignItems: 'center' }}>
        <Image style={styles.image} source={img} />
        <Text style={styles.idText}>{data.id.toString().padStart(2, '0')}</Text>
      </View>
      <View style={{ paddingTop: 40 }}>
        <Text style={styles.header}>{data.header}</Text>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subtitle}>{data.subtitle}</Text>
      </View>

    </View >
  );
}
const learnMoreImages: LearnMoreImage[] = [
  require('@/assets/images/hairLossInfoIllustration.png'),
  require('@/assets/images/erectileDysfunctionInfoIllustration.png'),
]

type LearnMoreImage = {
  uri: string
}
export type Data = {
  id: number,
  assetID: string,
  title: string,
  header: string,
  subtitle: string
}

const styles = StyleSheet.create({
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
  header: {
    color: '#6D8A83',
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: 1.5,
    paddingBottom: 10,
  },
  title: {
    color: '#0B3B3C',
    fontSize: 28,
    fontWeight: 500,
    lineHeight: 40,
    paddingBottom: 22,
  },
  subtitle: {
    color: '#0B3B3C',
    fontSize: 19,
    fontWeight: 400,
    lineHeight: 30,
  },
});