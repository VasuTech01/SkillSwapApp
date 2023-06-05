import { View, Text,StyleSheet,ScrollView ,TextInput,useWindowDimensions,KeyboardAvoidingView,TouchableOpacity} from 'react-native'
import React, { useLayoutEffect, useState } from 'react';
import TagInput from './TagInput';
import InputField from './InputField';
import colors from '../colors';
import { Ionicons } from "@expo/vector-icons";
import Seperator from './Seperator';

import { Picker } from '@react-native-picker/picker';


const Dropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  return (
    <Picker
      style={styles.picker}
      enabled={true}
      selectedValue={selectedLanguage}
      mode="dropdown"
      onValueChange={(itemValue, itemIndex) => {
        
        console.log(itemValue);
        setSelectedLanguage(itemValue);
      }
      }>
      <Picker.Item label="Research" value="research"  />
      <Picker.Item label="Software Development" value="software" />
      <Picker.Item label="Event" value="management" />
    </Picker>
  );
};
const ProjectForm = ({navigation}) => {
  const { height, width } = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity style={styles.button}>
            <Ionicons name="logo-google-playstore" size={24} color="black" />
          </TouchableOpacity>
        )
      }
    })


  }, [navigation]);
 
  return (
    <ScrollView contentContainerStyle={[styles.container,{height:height,width:width}]}>
      <KeyboardAvoidingView keyboardVerticalOffset={-200}  behavior="position" contentContainerStyle={[styles.fieldCont,{height:height,width:width}]} >
       <Seperator  title="Title"/>
        <TextInput type="text" placeholder="Title" style={styles.textInput} />
        <Seperator title="Type"/>
        <Dropdown />
        <Seperator title="Skills"/>
        <TagInput />
        <Seperator title="Description" />
        <TextInput  type="text" placeholder="Description of your Project" multiline={true} numberOfLines={10} style={styles.textarea} />
        </KeyboardAvoidingView>
    </ScrollView>
    
  )
}

export default ProjectForm;
const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: 20,
    backgroundColor: "#eee",
    flexDirection: "column",
    alignItems: "center",

  },
  
  fieldCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",

  },
  picker: {
    marginVertical: 20,
    width: "80%",
    backgroundColor:"#fff",
    padding: 10,
    borderWidth: 5,
   
    
  },
  textInput: {
    backgroundColor: "#fff",
    width: "85%",
    fontSize: 21,
    height: 60,
    margin: 10,
    textAlign: "center",
  

  },
  textarea: {
    fontSize: 16,
    backgroundColor: "#fff",
    width: "90%",
  
    height: "50%",
    margin: 10,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    textAlign: "center",
    paddingHorizontal: 5,
    fontWeight: "bold",
     textAlign:"justify"
    
  },
  button: {
    marginRight:15
    
  }
})