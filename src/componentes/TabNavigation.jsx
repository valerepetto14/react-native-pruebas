import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import Main from "./Main";

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

  export default function TabNavigation () {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: 'lightgray',
            activeBackgroundColor: '#53AEFF',
            inactiveBackgroundColor: '#64B6FF',
                style: {
                      backgroundColor: '#CE4418',
                      paddingBottom: 3
                }
         }}>
            <Tab.Screen name="Repositorios" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
  }