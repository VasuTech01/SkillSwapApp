import { View, Text, Animated, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const SPACING = 20;
const AVATAR_SIZE = 100;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
const url = "https://plus.unsplash.com/premium_photo-1681810782651-e5baca274a6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"

const ProjectItem = ({ item, scrollY, index,onPress }) => {
    const navigation = useNavigation();
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const opacityInputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 0.5)];
    const scale = scrollY.interpolate({
        inputRange,
        outputRange: [1, 1, 1, 0]
    })
    const opacity = scrollY.interpolate({
        inputRange: opacityInputRange
        ,
        outputRange: [1, 1, 1, 0]
    })
    const _onPress = () => {
        navigation.navigate("ProjectView", { item });
    }

    return (
        <TouchableOpacity onPress={_onPress}>
      <Animated.View style={{ flexDirection: "row", padding: SPACING, marginBottom: SPACING, backgroundColor: "rgba(255,255,255,1)", borderRadius: 12, shadowColor: "#000", shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.8, shadowRadius: 20, opacity, transform: [{ scale }] }}>
            <Image
              source={require("../assets/man.png")}
              style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight: SPACING / 2,
              }}
          />
          <View>
              <Text style={{ fontSize: 20, fontWeight: "700",overflow:"hidden"}}>{item.title}</Text>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>{item.class}</Text>
              <Text style={{ fontSize: 14, opacity: 0.8, color: "#0099cc" }}>{item.class}</Text>
              
          </View>
            </Animated.View>
        </TouchableOpacity>
        
  )
}

export default ProjectItem