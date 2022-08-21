import TabNavigation from "./src/TabNavigation";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return <TabNavigation />;
}
