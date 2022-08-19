import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "./StyledText";
import StyleTitle from "./StyleTitle";

const ItemRepo = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <TouchableOpacity activeOpacity={0.45}>
        <View style={styles.titleDiv}>
          <View style={styles.numContainer}>
            <StyledText white bold>
              {props.id}
            </StyledText>
          </View>

          <StyledText big bold black>
            {props.nombre}
          </StyledText>
        </View>
        <StyledText grey center small>
          {props.descripcion}
        </StyledText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 5,
    marginHorizontal: 7,
    backgroundColor: "#f2f2f2",
    borderRadius: 4,
    elevation: 1,
  },
  titleDiv: {
    flexDirection: "row",
  },
  numContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#80d0c7",
    borderRadius: 50,
    width: 30,
    height: 30,
    zIndex: -2,
    marginRight: 10,
    elevation: 3,
  },
});

export default ItemRepo;
