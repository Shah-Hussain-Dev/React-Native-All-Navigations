import { View, Text } from "react-native";
import React from "react";
import StackNavigator from "./navigators/StackNavigator";
import NativeStackNavigator from "./navigators/NativeStackNavigator";
import BottomNavigator from "./navigators/BottomNavigator";
import MaterialBottomTabs from "./navigators/MaterialBottomTabs";
import MaterialTopBar from "./navigators/MaterialTopBar";
import DrawerNavigation from "./navigators/DrawerNavigation";
import CustomDrawer from "./navigators/CustomDrawer";

const AppNavigator = () => {
  return (
    <>
      {/* Stack Navigator */}
      {/* <StackNavigator /> */}
      {/* Native Stack Navigator */}
      <NativeStackNavigator/>
      {/* Bottom tabs */}
      {/* <BottomNavigator/> */}

      {/* Material Bottom Navigation Tabs */}
      {/* <MaterialBottomTabs/> */}

    {/* Material Top bar */}
    {/* <MaterialTopBar/> */}

    {/* Drawer Navigation bar */}
    {/* <DrawerNavigation/> */}

{/* Custom Drawer Navigation */}
{/* <CustomDrawer/> */}
    </>
  );
};

export default AppNavigator;
