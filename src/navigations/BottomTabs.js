import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import Home from '../screen/home';
import Search from '../screen/search';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          //   tabBarIcon: ({color, size}) => (
          //     <MaterialCommunityIcons name="home" color={color} size={size} />
          //   ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Updates',
          //   tabBarIcon: ({color, size}) => (
          //     <MaterialCommunityIcons name="bell" color={color} size={size} />
          //   ),
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
