import React from "react";
import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "./StyledText";
import StyleTitle from "./StyleTitle";
import RepoNavigator from "../navigators/RepoNavigator";
import { useNavigation } from "@react-navigation/native";
import RepoStack from "../navigators/RepoNavigator";
import RepoDetails from "../screens/RepoDetails";

const ItemRepo = (props) => {
  const navigation = useNavigation();
  // const navigation = useNavigation();
  return (
    <View key={props.id} style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("repoDetails")}
        activeOpacity={0.45}
      >
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
        {/* <Button
        title="ver detalles"
        onPress={() => {
          navigation.navigate("repoDetails");
        }}
      /> */}
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
