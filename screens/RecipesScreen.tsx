import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const RecipesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Recipes!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
