import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/componentes/TabNavigation";
import RepoNavigator from "./src/navigators/RepoNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import RepoDetails from "./src/screens/RepoDetails";

const Stack = createStackNavigator();

export default function App() {
  return <TabNavigation />;
}
