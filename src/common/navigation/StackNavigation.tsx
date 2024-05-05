import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../container/Home/HomeScreen';
import ChatScreen from '../../container/Home/ChatScreen';
import LikesScreen from '../../container/Home/LikesScreen';
import ProfileScreen from '../../container/Home/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {NavScreenTags} from '../constants/navScreenTags';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name={NavScreenTags.HOME_TAB}
        component={HomeScreen}
        options={{
          // tabBarStyle: {backgroundColor: '#ccc'},
          // tabBarLabelStyle: {color: '#008397'},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="home-sharp" size={30} color={'#1593a1'} />
            ) : (
              <Ionicons name="home-outline" size={30} color={'#1593a1'} />
            ),
        }}
      />
      <Tab.Screen
        name={NavScreenTags.CHAT_TAB}
        component={ChatScreen}
        options={{
          // tabBarStyle: {backgroundColor: '#ccc'},
          // tabBarLabelStyle: {color: '#008397'},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="chatbox-sharp" size={30} color={'#1593a1'} />
            ) : (
              <Ionicons name="chatbox-outline" size={30} color={'#1593a1'} />
            ),
        }}
      />
      <Tab.Screen
        name={NavScreenTags.LIKE_TAB}
        component={LikesScreen}
        options={{
          // tabBarStyle: {backgroundColor: '#ccc'},
          // tabBarLabelStyle: {color: '#008397'},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="heart-sharp" size={30} color={'#1593a1'} />
            ) : (
              <Ionicons name="heart-outline" size={30} color={'#1593a1'} />
            ),
        }}
      />
      <Tab.Screen
        name={NavScreenTags.PROFILE_TAB}
        component={ProfileScreen}
        options={{
          // tabBarStyle: {backgroundColor: '#ccc'},
          // tabBarLabelStyle: {color: '#008397'},
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="person-sharp" size={30} color={'#1593a1'} />
            ) : (
              <Ionicons name="person-outline" size={30} color={'#1593a1'} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NavScreenTags.BOTTOM_TAB_NAV}
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NavScreenTags.BOTTOM_TAB_NAV}
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
