// import AppNavigator from "./app/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
