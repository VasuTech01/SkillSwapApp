import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, Entypo } from "@expo/vector-icons";
import LeftTopIcon from '../components/LeftTopIcon';
import React, { useEffect, useLayoutEffect } from 'react';
import ProjectContextProvider, { ProjectContext } from '../context/ProjectContext';

import colors from "../colors";
import ProjectList from '../components/ProjectList';
const catUrl = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d";



const Home = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            title:"Home",
            headerRight: ({ color }) => <LeftTopIcon name="chatbubbles" color={colors.gray} size={28} style={{ marginRight: 15 }} onPress={()=>{navigation.navigate("Chat")}} />
         })
    },[navigation])
    return (
        <ProjectContextProvider >
            <ProjectList/>
        </ProjectContextProvider>
    )
}

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: colors.yellow,
    },
    chatButton: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.9,
        shadowRadius: 8,
    }
})