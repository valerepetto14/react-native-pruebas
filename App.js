import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/componentes/TabNavigation";



export default function App() {
  return (
    <NavigationContainer>
        <TabNavigation></TabNavigation>
    </NavigationContainer>
  );
}
