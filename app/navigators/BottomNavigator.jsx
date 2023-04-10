import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";
import HomeScreen from "../screens/HomeScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "orange" },
        tabBarStyle: {
          backgroundColor: "seagreen",
          color: "white",
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            fontSize: 17,
            color: "white",
            fontWeight: "800",
            paddingBottom: 10,
          },
          tabBarBadge: 10,
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="home" size={40} color={"white"} />
          ),
        }}
      />
      <Tab.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            fontSize: 17,
            color: "white",
            fontWeight: "800",
            paddingBottom: 10,
          },
          tabBarBadge: 10,
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="account-circle"
              size={40}
              color={"white"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: "Likes",
          tabBarLabel: "Likes",
          tabBarLabelStyle: {
            fontSize: 17,
            color: "white",
            fontWeight: "800",
            paddingBottom: 10,
          },
          tabBarBadgeStyle: { backgroundColor: "yellow" },
          tabBarBadge: 10,
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="cards-heart"
              size={40}
              color={"red"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
