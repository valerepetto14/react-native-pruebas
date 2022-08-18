import React from "react";
import { View, Text } from "react-native";
import data from "../../data/data";

const ListRepos = () => {
  return (
    <View>
      // necesitamos correr atraves de nuestros datos
      {data.map((el) => {
        <View key={el.id}>
          <Text>{el.id}</Text>
        </View>;
      })}
    </View>
  );
};
