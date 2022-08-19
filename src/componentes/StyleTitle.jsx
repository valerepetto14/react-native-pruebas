import React from "react";
import { Text, View, StyleSheet } from "react-native";

const titles = StyleSheet.create({
    text: {
        fontSize: 25,
        color: "blue",
        fontWeight:"bold"
    },
    big:{
        fontSize: 30,
    },
    small:{
        fontSize: 22,
    }
})

export default function StyledTitle({big, children, small}){
    const styletitle = [
        titles.text,
        big && titles.big,
        small && titles.small
    ]
    return (
        <Text style={styletitle}>
            {children}
        </Text>
    )
}