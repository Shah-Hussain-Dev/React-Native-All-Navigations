import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ContactScreen from "./ContactScreen";
import ProfileScreen from "./ProfileScreen";
import SettingScreen from "./SettingScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";
import SearchScreen from "./SearchScreen";

const Tab = createBottomTabNavigator();

const UserPanel=()=>{
    return (
<Tab.Navigator initialRouteName="Profile"  screenOptions={{
        headerStyle: { backgroundColor: "orange" },
        tabBarStyle: {
          backgroundColor: "#B2A4FF",
          color: "white",
          height: 80,
        },

        headerShown:false
        
      }} >
    <Tab.Screen name="About"   options={{
          title: "Search",
          tabBarLabel: "Search",
          tabBarLabelStyle: {
            fontSize: 17,
            color: "white",
            fontWeight: "800",
            paddingBottom: 10,
          },
          
          tabBarIcon: (props) => (
            <MaterialCommunityIcons name="book-search" size={40} color={"white"} />
          ),
        }} component={SearchScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen}  
     options={{
          title: "Profile",
          tabBarLabel: "Profile",
          tabBarLabelStyle: {
            fontSize: 17,
            color: "white",
            fontWeight: "800",
            paddingBottom: 10,
          },
          
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="account-circle"
              size={40}
              color={"white"}
            />
          ),
        }}/>
    <Tab.Screen name="Contact" component={SettingScreen} options={{
          title: "Setting",
          tabBarLabel: "Setting",
          tabBarLabelStyle: {
            fontSize: 17,
            color: "white",
            fontWeight: "800",
            paddingBottom: 10,
          },
          tabBarBadge: 2,
          tabBarIcon: (props) => (
            <AntDesign
              name="setting"
              size={40}
              color={"white"}
            />
          ),
        }}/>
         <Tab.Screen
        name="Likes"
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
    )
}


export default UserPanel;