import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from "../screens/Chat";
import ProjectView from "../screens/ProjectView";
import ChatStack from './ChatStack';
import LeftTopIcon from '../components/LeftTopIcon';
import colors from '../colors';
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
 
 
  return (
    <Stack.Navigator defaultScreen="Home" screenOptions={{
      headerTitleAlign: "center", 
      headerShown:false,
    }} >
      <Stack.Screen name="Home" component={ChatStack} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ProjectView" component={ProjectView} />
    </Stack.Navigator>
  )
}

export default HomeNavigator;