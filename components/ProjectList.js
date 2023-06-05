import {
    View, Text, Animated, FlatList,StatusBar, Dimensions,StyleSheet,ActivityIndicator
} from 'react-native'
import React, {useContext, useRef,useState,useMemo} from 'react';
import { ProjectContext } from '../context/ProjectContext';
import ProjectItem from './ProjectItem';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import ProjectView from '../screens/ProjectView';
const { height, width } = Dimensions.get("screen");
const SPACING = 20;
const AVATAR_SIZE = 100;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
const ProjectList = () => {
    const { projects } = useContext(ProjectContext);
    console.log(projects);
    const scrollY = useRef(new Animated.Value(0)).current;  
    return (
      <View style={style.cont}>
            {projects ? <Animated.FlatList
                data={projects}
                onScroll={Animated.event([{
                    nativeEvent: { contentOffset: { y: scrollY } }
                }], { useNativeDriver: true })}
                contentContainerStyle={{ padding: SPACING, paddingTop: StatusBar.currentHeight || 42 }}
                keyExtractor={item => item._id}
                renderItem={({ item, index }) => <ProjectItem item={item} index={index} scrollY={scrollY} />}
            />:<ActivityIndicator />}
            </View>
  )
}
const style = StyleSheet.create({
    cont: {
        flex: 1,
        height: height,
        width: width
    }
})


export default ProjectList;