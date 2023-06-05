import { View, Text,TouchableOpacity,Alert } from 'react-native'
import React,{useContext,useState,useLayoutEffect, useCallback} from 'react';
import { GiftedChat } from "react-native-gifted-chat";
import { addDoc,query,orderBy,collection,onSnapshot} from "firebase/firestore";
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { auth, database} from "../config/firebase";
import colors from '../colors';
import { AntDesign } from "@expo/vector-icons";
import axios from 'axios';
import { ActivityIndicator } from 'react-native';



const Chat = () => {

  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const _signOut = () => {
    signOut(auth).catch((err) => { Alert.alert("Error Signout", err.message); console.log(err)})
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:true,
      headerRight: () => {
        return (
          <TouchableOpacity style={{marginRight:10}} onPress={_signOut}>
            <AntDesign name="logout" color={colors.gray} style={{marginRight:10}}  />
          </TouchableOpacity>
        )
     } 
   })

  }, [navigation])
  
  useLayoutEffect(() => {
    setLoading(true);
    const collectionRef = collection(database, 'chats','rooms','messages');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      console.log("snapshot");
      setMessages(snapshot.docs.map(doc => ({
        _id: doc.id,
        createdAt: doc.data().createdAt,
        text: doc.data().text,
        user:doc.data().user        
      }))
      )
      setLoading(false);
    })
    return () => unsubscribe();
  }, [])
  const onSend = useCallback((message = []) => {
    console.log(message);
    setMessages((prevMsgs => GiftedChat.append(prevMsgs, message)));
    const { _id, text, user, createdAt } = message[0];
    addDoc(collection(database, 'chats','rooms','messages'), {
      _id, text, user, createdAt: new Date(createdAt)
    }).then((r) => { console.log("Hellow", r) }).catch(e => console.log(e));
    
//   axios.get("http://127.0.0.1:5000/").then((r) => { console.log(r) }).catch(e => console.log(e));
  }, [])
  

  if (loading) {
    return (<ActivityIndicator size="large" />);
   }
  
  return (
    <GiftedChat
      placeholder='Write Message'
      messages={messages}
      onSend={(message) => onSend(message)}
      user={
        {
          _id: auth?.currentUser?.email,
          avatar: "https://i.pravatar.cc/400"
        }
      }
      messagesContainerStyle={{
      backgroundColor:colors.white
    }}
    />
  )
}

export default Chat;