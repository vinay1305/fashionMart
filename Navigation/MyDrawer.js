import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../src/Views/Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../src/Views/Screens/ProfileScreen/ProfileScreen';
import WishlistScreen from '../src/Views/Screens/WishlistScreen/WishlistScreen';
import SettingScreen from '../src/Views/Screens/SettingScreen/SettingScreen';
import ContactScreen from '../src/Views/Screens/ContactUs/ContactScreen';
import CustomDrawer from './CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialIcons';
const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor:"#DBDBDB",
        drawerActiveTintColor:"#000",
        drawerInactiveTintColor:"#333",
        drawerLabelStyle: {marginLeft: '-15%',
    fontFamily:"Poppins",
fontSize:15},
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="profile" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          drawerIcon: ({color}) => (
            <Material name="favorite-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="setting" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contactus"
        component={ContactScreen}
        options={{
          drawerIcon: ({color}) => (
            <Material name="connect-without-contact" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
