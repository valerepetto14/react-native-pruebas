import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importamos las pantallas que vamos a utilizar
import Login from "../screens/LoginScreen";
import Register from "../screens/RegisterScreen";
import Cuenta from "../screens/CuentaScreen";

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="cuenta" component={Cuenta} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signin" component={Register} />
    </Stack.Navigator>
  );
};

export default AccountStack;
