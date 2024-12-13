import { StyleSheet, StatusBar, Text, Image, View, SafeAreaView, FlatList, useWindowDimensions, ViewToken } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { Button, TouchableHighlight, Animated } from "react-native";
import { PrimaryButton } from "@/components/PrimaryButton";
import DataJson from '../../data.json';
import React, { useState, useRef } from 'react';
import Paginator from '@/components/LearnMore/Paginator';
import { LearnMoreSection } from "@/components/LearnMore/LearnMoreSection";

export default function LearnMoreView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const dataRef = useRef<FlatList>(null);
  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index ?? 0);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < DataJson.data.length - 1) {
      dataRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.back();
    }
  };

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
      <View style={{ flex: 1 }}></View>

      <View style={{ justifyContent: 'center', alignItems: 'flex-end', }}>
        <FlatList
          data={DataJson.data}
          renderItem={({ item }) => <LearnMoreSection key={item.id} data={item} />}
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

      <View style={{ paddingHorizontal: 18, justifyContent: 'flex-end', flex: 1 }}>
        <Paginator data={DataJson.data} scrollX={scrollX} currentIndex={currentIndex} />
        <PrimaryButton
          type='secondary'
          onPress={scrollTo}
          children={
            <Text>{currentIndex == 0 ? 'NEXT' : 'DONE'}</Text>
          }
        />
      </View>

    </View>
  );
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
    // paddingHorizontal: 18,
  },
  touchable: {
    borderRadius: 100,
  }
});