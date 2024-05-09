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
import BasicInfo from '../../container/Auth/BasicInfo';
import NameScreen from '../../container/Auth/NameScreen';
import EmailScreen from '../../container/Auth/EmailScreen';
import PasswordScreen from '../../container/Auth/PasswordScreen';
import BirthScreen from '../../container/Auth/BirthScreen';
import LocationScreen from '../../container/Auth/LocationScreen';
import GenderScreen from '../../container/Auth/GenderScreen';
import TypeScreen from '../../container/Auth/TypeScreen';
import DatingTypeScreen from '../../container/Auth/DatingTypeScreen';
import LookingForScreen from '../../container/Auth/LookingForScreen';
import HomeTownScreen from '../../container/Auth/HomeTown';
import PhotoScreen from '../../container/Auth/PhotoScreen';
import PromptsScreen from '../../container/Auth/PromptsScreen';
import ShowPromptsScreen from '../../container/Auth/ShowPromptsScreen';
import PrefinalScreen from '../../container/Auth/PreFinalScreen';

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
        name={NavScreenTags.BASIC_INFO_SCREEN}
        component={BasicInfo}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={NavScreenTags.NAME_SCREEN}
        component={NameScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={NavScreenTags.EMAIL_SCREEN}
        component={EmailScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={NavScreenTags.PASSWORD_SCREEN}
        component={PasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavScreenTags.BIRTH_SCREEN}
        component={BirthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavScreenTags.LOCATION_SCREEN}
        component={LocationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavScreenTags.GENDER_SCREEN}
        component={GenderScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavScreenTags.TYPE_SCREEN}
        component={TypeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavScreenTags.DATING_TYPE_SCREEN}
        component={DatingTypeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavScreenTags.LOOKIN_FOR_SCREEN}
        component={LookingForScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavScreenTags.HOME_TOWN_SCREEN}
        component={HomeTownScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavScreenTags.PHOTE_SCREEN}
        component={PhotoScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavScreenTags.PROMPTS_SCREEN}
        component={PromptsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavScreenTags.SHOW_PROMPTS_SCREEN}
        component={ShowPromptsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={NavScreenTags.PREFINAL_SCREEN}
        component={PrefinalScreen}
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

      {/* <AuthStack /> */}
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
