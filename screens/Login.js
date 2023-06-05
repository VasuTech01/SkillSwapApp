import { View, Text, TextInput, Alert, TouchableOpacity, StatusBar, StyleSheet, Button, Image, SafeAreaView } from 'react-native'
import React, { useState,useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from "../config/firebase";
const backImage = require("../assets/backImage.png");


const Login = ({navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {SignInUser} = useContext(AuthContext);
    const _handleLogin = () => {
        if (email !== '' && password !== "") {
            SignInUser(email, password).then(r => {
                if (!r.ok) {
                    Alert.alert("Erorr", r.message);
                    return;
                }
                console.log("res", r)
            }).catch(e => Alert.alert("Erorr", e.message))
        }
    }
    return (
        <View style={styles.container}>
            <Image source={backImage} style={styles.backImage} />
            <View style={styles.whiteSheet}>
                <SafeAreaView style={styles.form}>
                    <Text style={styles.title} >Login</Text>
                    <TextInput
                       
                        style={styles.input}
                        placeholder="Enter Email"
                       autoFocus={true}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        textContentType='emailAddress'
                        value={email}
                        onChangeText={(text)=>setEmail(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Password'
                        autoCorrect={false}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        textContentType='password'
                        value={password}
                        onChangeText={(text)=>setPassword(text)}
                    />
                    <TouchableOpacity style={styles.button} onPress={_handleLogin}>
                        <Text style={{fontWeight:"bold",color:"#fff",fontSize:18}}>Login</Text>
                    </TouchableOpacity>
                    <View  style={{marginTop:20,alignItems:"center",alignSelf:"center",flexDirection:"row"}}>
                        <Text style={{ color: "gray", fontSize: 14, fontWeight: "600" }}>Don't Have An Account?</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate("Signup")}}>
                            <Text style={{color:"#f57c00",fontWeight:"600",fontSize:14}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>


            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "orange",
        alignSelf: "center",
        paddingBottom:24
    }, input: {
        backgroundColor: "#f6f7f8",
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding:12
    }, backImage: {
        width: "100%",
        height: 340,
        position: "absolute",
        top: 0,
        resizeMode:"cover"
    },
    whiteSheet: {
        width: "100%",
        height: "75%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "#fff",
        borderTopLeftRadius: 60,
    },
    form: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal:30
    },
    button: {
        backgroundColor: "#f57c00",
        height: 58,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop:40
    }


})
export default Login