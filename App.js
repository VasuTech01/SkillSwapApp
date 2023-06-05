import { StatusBar } from 'expo-status-bar';
import {useState,createContext,useContext,useEffect} from 'react';
import { StyleSheet, Text, View,useWindowDimensions,ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AuthContextProvider,{ AuthContext } from './context/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./config/firebase";
// import Home from "./screens/Home";

import HomeNavigator from './navigators/HomeNavigator';
import Login from './screens/Login';
import Signup from "./screens//Signup";

const Stack = createNativeStackNavigator();
//export const AuthenticatedUserContext = createContext({});

// const AuthenticatedUserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   return (
//     <AuthenticatedUserContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthenticatedUserContext.Provider>
//   )

// };
// const ChatStack = () => {
//   return (
//     <Stack.Navigator defaultScreenOptions={Home} screenOptions={{headerTitleAlign:"center"}} >
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Chat" component={Chat} initialParams={{ name: "Hellow" }} />
//       <Stack.Screen name="Project" component={ProjectForm} />
//     </Stack.Navigator>
//   )
// }
function AuthStack() {
  return (
    <Stack.Navigator defaultScreenOptions={Login}screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )

}
const RootNavigator = () => {
  const {user,setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => { 
    const unsubscribe = onAuthStateChanged(auth,
      async authenticatedUser => {
        console.log("Authenticated User", user);
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setLoading(false);
      })
    return () => { unsubscribe(); }

  }, [user]);
  if (loading) {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
         <ActivityIndicator size="large"/>
      </View>
    )
  }
  return (
    <NavigationContainer>
      {user ? <HomeNavigator/>:<AuthStack/>}
    </NavigationContainer>
  )
}




export default function App() {
  const {height,width} = useWindowDimensions();
  return (
    <AuthContextProvider>
      <RootNavigator/> 
    </AuthContextProvider>
    // <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
