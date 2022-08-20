import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// importo mis diferentes pantallas
import Main from "../componentes/Main";
import RepoDetails from "../screens/RepoDetails";

const Stack = createStackNavigator();

export default function RepoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="repoDetails"
        component={RepoDetails}
        options={{ title: "detalles del repositorio" }}
      />
    </Stack.Navigator>
  );
}
