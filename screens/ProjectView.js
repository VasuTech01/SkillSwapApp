import { View, Text, StyleSheet ,SafeAreaView,StatusBar,Dimensions,Image,ActivityIndicator,ScrollView} from 'react-native'
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import Seperator from '../components/Seperator';
import axios from "axios";
const { height, width } = Dimensions.get("screen");
const ProjectView = ({navigation,route}) => {
  const { item } = route.params;
  const [project, setProject] = useState(null);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title:"Project Details"
    })
  }, [])
  const getData = async () => {
    
    try {
      console.log(item);
      const res = await axios.get("https://skillswapservice.onrender.com/projects/" + item.project_id);
      if (res.status != 200) {
        throw new Error("Error Fetching Data");
      }
      console.log(res.data);
      setProject(res.data);
      console.log(res.data.user_id.avatar);
    } catch (e) {
      console.log(e.message);
       }
  }
  useEffect(() => {
    getData();
  }, []);
  
  return (
    <SafeAreaView style={styles.cont}>
      <Text style={{ fontSize: 23, color: "#fff", marginVertical: 10, fontWeight: "bold" }}><Text style={{color:"black"}}>Title: </Text> {item.title}</Text>
      <Seperator />
      <Text style={{ fontSize: 20, color: "#fff", fontWeight: "600" }}><Text style={{ color: "black" }}>Type: </Text> {item.class}</Text>
      {/* <Seperator /> */}
      <Seperator title="Requirements" />
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start",padding:10 }}>
        {item.skills.map((s,id) => <Text key={id}  style={{ fontSize: 12, marginHorizontal:10,marginVertical:3,padding:5,color: "#fff", backgroundColor: "green",borderRadius:10 }}>{s}</Text>)}
      </View>
<Seperator/>
      {project? <View style={{ height: "10%", width: "100%", backgroundColor: "#fff", flexDirection: "row", alignItems: "center", padding: 20, borderRadius: 10,marginVertical:10 }}>
        <Image src={project.user_id.avatar} style={{ height: 50, width: 50, resizeMode: "stretch", borderRadius: 20, backgroundColor: "yellow" }} />
        <View>
          <Text style={{ marginHorizontal: 10, fontSize: 20, fontWeight: "bold" }}>{project.user_id.username}</Text>
          <Text style={{ marginHorizontal: 10, fontSize: 16, fontWeight: "bold" }}>{project.user_id.clg}</Text>
        </View>

      </View>:<ActivityIndicator/>}
      <Seperator title="Description" />
      <Text style={{ fontSize: 16, color: "black" }}>{item.desc}</Text>
     
      
    </SafeAreaView>
  )
}

export default ProjectView;
const styles = StyleSheet.create({
  cont: {
    flex: 1,
    height: height,
    width: width,
    padding: 10,
    backgroundColor:"#f75"
  }
})