import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  AccountIcon,
  AccountIconActive,
  ChatIcon,
  ChatIconActive,
  HomeIcon,
  HomeIconActive,
  SearchIcon,
  SearchIconActive,
} from '../assets/svg';
import Account from '../screen/account';
import Chat from '../screen/chat';
import Home from '../screen/home';
import Search from '../screen/search';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: styles.tab,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.tabMenu}>
                <HomeIconActive width={30} height={30} />
              </View>
            ) : (
              <View style={styles.tabMenu}>
                <HomeIcon width={30} height={30} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.tabMenu}>
                <SearchIconActive width={30} height={30} />
              </View>
            ) : (
              <View style={styles.tabMenu}>
                <SearchIcon width={30} height={30} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.tabMenu}>
                <ChatIconActive width={30} height={30} />
              </View>
            ) : (
              <View style={styles.tabMenu}>
                <ChatIcon width={30} height={30} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.tabMenu}>
                <AccountIconActive width={30} height={30} />
              </View>
            ) : (
              <View style={styles.tabMenu}>
                <AccountIcon width={30} height={30} />
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tab: {
    height: 40,
  },
  tabMenu: {
    marginTop: 20,

    marginBottom: 0,
  },
});
