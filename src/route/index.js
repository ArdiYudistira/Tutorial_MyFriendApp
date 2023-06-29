import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import BottomTabs from '../navigations/BottomTabs';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <Stack.Navigator initialRouteName="MainMenu">
      <Stack.Screen
        name="MainMenu"
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Route;

const styles = StyleSheet.create({});
