import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome,Ionicons} from "@expo/vector-icons";

const LeftTopIcon = ({name,color,size,onPress,style}) => {
  return (
    <TouchableOpacity onPress={onPress} accessible={true} accessibilityLabel="input" >
          <Ionicons name={ name} style={style} color={color} size={size}  />
     </TouchableOpacity>
  )
}

export default LeftTopIcon