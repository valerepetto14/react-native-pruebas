import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: "black",
  },
  bold: {
    fontWeight: "bold",
  },
  black: {
    color: "#222",
  },
  grey: {
    color: "#888",
  },
  white: {
    color: "white",
  },
  big: {
    fontSize: 20,
  },
  small: {
    fontSize: 14,
  },
  center: {
    textAlign: "justify",
    marginHorizontal: 40,
  },
});

export default function StyledText({
  white,
  black,
  grey,
  bold,
  children,
  big,
  small,
  center,
}) {
  const styletext = [
    styles.text,
    black && styles.black,
    bold && styles.bold,
    big && styles.big,
    small && styles.small,
    white && styles.white,
    grey && styles.grey,
    center && styles.center,
  ];
  return <Text style={styletext}>{children}</Text>;
}
