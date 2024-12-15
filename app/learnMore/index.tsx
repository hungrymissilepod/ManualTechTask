import { StyleSheet, StatusBar, Text, View, FlatList, ViewToken } from "react-native";
import { router, Stack } from "expo-router";
import { Animated } from "react-native";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";
import LearnMoreSections from '../../learnMore.json';
import React, { useState, useRef } from 'react';
import Paginator from '@/components/LearnMore/Paginator';
import { LearnMoreSection } from "@/components/LearnMore/LearnMoreSection";
import { CloseIcon } from "@/components/HeaderIcons/CloseIcon";
import { Colors } from '../../constants/Colors';
import { Sizes } from "@/constants/Sizes";

export default function LearnMoreView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<FlatList>(null);

  // When user drags carousel, update [currentIndex]
  const viewableItemsChanged = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index ?? 0);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  // Scroll to carousel page when user taps NEXT button
  const scrollTo = () => {
    if (currentIndex < LearnMoreSections.data.length - 1) {
      scrollRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.background} />
      <Stack.Screen
        options={{
          headerTitle: 'What can we help with',
          headerTitleAlign: 'center',
          animation: 'ios_from_right',
          headerLeft: () => <CloseIcon />
        }}
      />
      <View style={styles.container}></View>

      <View style={styles.carouselContainer}>
        <FlatList
          data={LearnMoreSections.data}
          renderItem={({ item }) => <LearnMoreSection key={item.id} learnMore={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={scrollRef}
        />
      </View>

      <View style={[styles.container, { paddingHorizontal: Sizes.paddingHorizontal, justifyContent: 'flex-end' }]}>
        <Paginator data={LearnMoreSections.data} scrollX={scrollX} currentIndex={currentIndex} />
        <PrimaryButton
          type='primary'
          onPress={scrollTo}
          children={
            <Text>{currentIndex == 0 ? 'NEXT' : 'DONE'}</Text>
          }
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: Colors.background,
  },
});