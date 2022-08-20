import React from "react";
import Constants from "expo-constants";
import { Text, View, StyleSheet } from "react-native";
import ListRepos from "./ListRepos";

const Main = () => {
  return (
    <View style={styles.fondo}>
      <ListRepos></ListRepos>
    </View>
  );
};

const styles = StyleSheet.create({
  fondo: {
    flexGrow: 1,
  },
});

export default Main;
