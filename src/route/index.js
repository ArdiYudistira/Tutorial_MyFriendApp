import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import BottomTabs from '../navigations/BottomTabs';
import Login from '../screen/auth/login';
import Splash from '../screen/splash';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="MainMenu"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Route;

const styles = StyleSheet.create({});
