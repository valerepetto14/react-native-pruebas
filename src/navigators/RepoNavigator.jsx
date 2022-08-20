import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RepoDetails from "../screens/RepoDetails";

const Stack = createStackNavigator();

export default RootRepos = () => { 
    return (
        <Stack.Navigator>
            <Stack.Screen name="repoDetails" component={RepoDetails}/>
        </Stack.Navigator>
    )
}