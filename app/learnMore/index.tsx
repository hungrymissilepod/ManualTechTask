import { StyleSheet, StatusBar, Text, View, SafeAreaView, FlatList, useWindowDimensions, ViewToken } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { Button, TouchableHighlight, Animated } from "react-native";
import { PrimaryButton } from "@/components/PrimaryButton";
import DataJson from '../../data.json';
import React, { useState, useRef } from 'react';
import Paginator from '@/components/LearnMore/Paginator';

export default function LearnMoreView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const dataRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      console.log(`setCurrentIndex: ${viewableItems[0].index}`);
      setCurrentIndex(viewableItems[0].index ?? 0);
    }

  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#ECF0EB' />
      <Stack.Screen
        options={{
          headerTitle: 'What can we help with',
          headerTitleAlign: 'center',
          animation: 'ios_from_right',
          headerLeft: () => <CloseButton />
        }}
      />
      <View style={{ flex: 1, }}></View>

      <View style={{ justifyContent: 'center', alignItems: 'flex-end', flex: 2 }}>
        <FlatList
          data={DataJson.data}
          renderItem={(item) => <LearnMoreSection key={item.item.id} data={item.item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={dataRef}
        />
      </View>


      <View style={{ flex: 1, justifyContent: 'flex-end', }}>
        <Paginator data={DataJson.data} scrollX={scrollX} currentIndex={currentIndex} />
        <PrimaryButton
          type='secondary'
          onPress={() => { console.log('TAKE THE QUIZ') }}
          children={
            <Text>NEXT</Text>
          }
        />
      </View>

    </View>
  );
}


const LearnMoreSection = (data: LearnMoreSectionProps) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[{ width }]}>
      <Text>section: {data.data.id}</Text>
      <Text>{data.data.title}</Text>
      <Text>{data.data.header}</Text>
    </View>
  );
}

export type Data = {
  id: number,
  assetID: string,
  title: string,
  header: string,
  subtitle: string
}

export type LearnMoreSectionProps = {
  data: Data,
}

// TODO: move to Component folder
const CloseButton = (props: any) => {
  return (
    <TouchableHighlight style={styles.touchable} activeOpacity={0.6} underlayColor="#DDDDDD"
      onPress={() => { router.back() }}>
      <Ionicons name="close" size={24} color="black" />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0EB',
    paddingHorizontal: 18,
  },
  touchable: {
    borderRadius: 100,
  }
});