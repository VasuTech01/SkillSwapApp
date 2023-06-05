import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import { useEffect } from 'react';
import ProjectForm from "../components/ProjectForm";
import Profile from "../screens/Profile";
import Chat from "../screens/Chat";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const ChatStack = () => {
  
    
    return (
        <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true,headerTitleAlign: "center" ,headerShown:true}} >
            <Tab.Screen name="Projects" component={Home} options={{title:"Home",tabBarIcon:({color})=><FontAwesome name="table" size={24} color={color} />,tabBarLabel:"Home"}}   />
            <Tab.Screen name="ProjectForm" component={ProjectForm} initialParams={{ name: "Hellow" }} options={{tabBarVisible:false, tabBarIcon: ({ color }) => (<FontAwesome name="snapchat" size={24} color={color} />),tabBarLabel:"Post"}} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,tabBarLabel:"Profile"}} />
        </Tab.Navigator>
    )
}


export default ChatStack;