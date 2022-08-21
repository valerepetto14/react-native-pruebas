import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import Main from "./componentes/Main";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// import Main from "../componentes/Main";
import HomeStack from "./ScreenStacks/HomeStack";
import SettingStack from "./ScreenStacks/SettingStack";
import AccountStack from "./ScreenStacks/AccountStack";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Repositorios"
        tabBarOptions={{
          activeTintColor: "#fff",
          inactiveTintColor: "lightgray",
          activeBackgroundColor: "#2B4865",
          inactiveBackgroundColor: "#002B5B",
          style: {
            backgroundColor: "#CE4418",
            paddingBottom: 3,
          },
        }}
      >
        <Tab.Screen
          name="Repositorios"
          component={HomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Ajustes"
          component={SettingStack}
          options={{
            tabBarLabel: "Ajustes",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Cuenta"
          component={AccountStack}
          options={{
            tabBarLabel: "Cuenta",
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person-circle-outline"
                color={color}
                size={size}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
