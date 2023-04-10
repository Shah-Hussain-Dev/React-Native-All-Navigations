import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();
const StackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Learning React Native",
        headerStyle: {
          backgroundColor: "#B2A4FF",
        },
        headerLeft: (props) => (
          <MaterialCommunityIcons
            style={{ padding: 10 }}
            name="home"
            size={30}
            color={"white"}
            {...props}
            onPress={() => {
              navigation.goBack();
            }}
          />
        ),
        headerRight: (props) => (
          <MaterialCommunityIcons
            style={{ padding: 10 }}
            name="bell"
            size={30}
            color={"white"}
            {...props}
            onPress={() => {
              navigation.goBack();
            }}
          />
        ),
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerShadowVisible: true,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options={{ headerShown: false }}
        options={{
          title: "Welcome to React native",
          headerStyle: {
            backgroundColor: "red",
            headerTintColor: "white",
          },

          headerTintColor: "white",
        }}
      />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
