import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#73c2fb",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 44,
    color: "#fff",
  },
});
