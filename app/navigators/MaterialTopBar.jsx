import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import HomeScreen from '../screens/HomeScreen';
const Tab = createMaterialTopTabNavigator();

const MaterialTopBar = ()=>{
    return (
    <Tab.Navigator style={{marginTop:60}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
    )
}


export default MaterialTopBar;