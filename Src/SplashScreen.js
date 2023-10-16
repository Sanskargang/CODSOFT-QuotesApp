import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image ,StatusBar} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Home } from "./Home";
export function Splashscreen() {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Home');
        },1500)
    },[]);
    return (

        <View style={styles.view}>
            <StatusBar animated={true} backgroundColor="black"/>
            <Image source={require("../Image/sp2.png")}
                style={styles.images}
            />
            <Text style={styles.text}># Be Positive</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(10,10,10)',
    },
    images: {
        height: 200,
        width: 200,
        borderRadius: 20,
    },
    text: {
        color: 'white',
        top: 10,
        fontSize: 22,
        fontStyle: "italic",
    }
});