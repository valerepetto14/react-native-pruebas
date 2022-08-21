import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// importo mis diferentes pantallas
import Main from "../componentes/Main";
import RepoDetails from "../screens/RepoDetails";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Main}
        options={{ title: "lista de repositorios de github" }}
      />
      <Stack.Screen
        name="repoDetails"
        component={RepoDetails}
        options={{ title: "detalles del repositorio" }}
      />
    </Stack.Navigator>
  );
}
