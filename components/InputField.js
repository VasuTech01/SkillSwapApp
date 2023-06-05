import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'
import colors from '../colors';

const InputField = ({ type,Label,onChange ,value,multipleLines}) => {
  return (
    <View style={[styles.container]}>
      <TextInput multiline={multipleLines}  style={[styles.textInput]} type={type} placeholder={Label} onChange={onChange} value={value} />
   </View>
  )
}

export default InputField;
const styles = StyleSheet.create({
  container: {
    height: "10%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin:5
    
  },
  textInput: {
    width: "95%",
    height: "95%",
    fontSize: 22,
    backgroundColor:"#ffe"
   }

})
