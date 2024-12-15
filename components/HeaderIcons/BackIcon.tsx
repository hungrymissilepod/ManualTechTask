import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableHighlight } from "react-native";
import React from 'react';

export const BackIcon = () => {
  return (
    <TouchableHighlight style={styles.touchable} activeOpacity={0.6} underlayColor="#DDDDDD"
      onPress={() => { router.back() }}>
      <Ionicons name="arrow-back-outline" size={24} color="black" />
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  touchable: {
    borderRadius: 100,
  }
});