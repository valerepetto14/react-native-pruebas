import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import Main from "./src/componentes/Main";
import ListRepos from "./src/componentes/ListRepos";

export default function App() {
  return (
    <View>
      <Main></Main>
      <ListRepos></ListRepos>
    </View>
  );
}
