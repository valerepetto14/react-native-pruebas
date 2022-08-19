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
    blue: {
        color: "blue",
    },
    big:{
        fontSize: 20,
    },
    small: {
        fontSize: 10,
    },
})

export default function StyledText({blue, bold, children, big, small}) {
    const styletext = [
        styles.text,
        blue && styles.blue,
        bold && styles.bold,
        big && styles.big,
        small && styles.small
    ]
    return (
        <Text style={styletext}>
           {children} 
        </Text>   
    )
}

