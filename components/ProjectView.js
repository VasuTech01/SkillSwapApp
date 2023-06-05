import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect,useState,useRef} from 'react'

const ProjectView = ({item}) => {
    return (
    <View>
            <Text style={{fontSize:22,color:"black"}}>{item.title}</Text>
            <Text style={{fontSize:18,color:"black"}}>{item.class}</Text>
            <Text style={{ fontSize: 16, color: "black" }}>{item.description}</Text>
            <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
                {item.skills.map(s => <Text style={{fontSize:12,color:"#29f"}}>{s}</Text>)} 
            </View>
    </View>
  )
}

export default ProjectView;