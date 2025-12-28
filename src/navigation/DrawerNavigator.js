import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: 'Flickr Image Gallery',
        headerTitleAlign: 'center',
        drawerActiveTintColor: '#2196F3',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          fontSize: 16,
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: 'Home',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
