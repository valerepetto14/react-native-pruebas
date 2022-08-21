import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importamos pantallas que vamos a usar
import AjustesPantalla from "../screens/SettingScreen";

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ajustes" component={AjustesPantalla} />
    </Stack.Navigator>
  );
};

export default SettingStack;
