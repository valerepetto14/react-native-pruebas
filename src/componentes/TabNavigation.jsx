import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import Main from "./Main";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
// probandooo

// import Main from "../componentes/Main";
import RepoDetails from "../screens/RepoDetails";
import RepoStack from "../navigators/RepoNavigator";

function HomeScreen() {
  return (
    <View>
      <Main></Main>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          activeTintColor: "#fff",
          inactiveTintColor: "lightgray",
          activeBackgroundColor: "#53AEFF",
          inactiveBackgroundColor: "#64B6FF",
          style: {
            backgroundColor: "#CE4418",
            paddingBottom: 3,
          },
        }}
      >
        <Tab.Screen name="Repositorios" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="repos" component={RepoStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
