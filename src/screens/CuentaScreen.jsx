import React from "react";
import { View, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cuenta() {
  const navigation = useNavigation();
  return (
    <View>
      <Button title="Log in" onPress={() => navigation.navigate("login")} />
      <Button title="Sign in" onPress={() => navigation.navigate("signin")} />
    </View>
  );
}
