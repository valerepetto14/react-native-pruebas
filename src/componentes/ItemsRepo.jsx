import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import StyleTitle from "./StyleTitle"

const ItemRepo = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <StyleTitle big >{props.id}</StyleTitle>
            <StyledText>{props.nombre}</StyledText>
            <StyledText>{props.descripcion}</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong:{
        color: "#09f",
        fontWeight: "bold",
        marginBottom: 5
    }
})

export default ItemRepo;