import { Image, StyleSheet, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

const Sidebar = ({ ...props }) => {
  return (
    <DrawerContentScrollView {...props}>
   <View style={{justifyContent:"center",alignItems:"center"}}>
    <Image source={{uri:"https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw"}} style={{height:100,width:100, borderRadius:50}}/>
    <Text style={{fontSize:20,fontWeight:"800"}}>Shah Husain</Text>
    <Text style={{fontSize:13,fontWeight:"400"}}>Full Stack Developer</Text>
   </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default Sidebar;

const styles = StyleSheet.create({});
