import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ShareButton } from "./Share";
import {Back} from '../Src/BackHandler'
export function Home() {
    const [Quote, setQuote] = useState('Loading....');
    const [Author, setAuthor] = useState('Loading...');
    const randomQuote = () => {
        fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
            setQuote(result.content);
            setAuthor(result.author);
            //console.log(result.author);
        })
    }
    useEffect(()=>{
        randomQuote();
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.text}>Quotes of the Day</Text>

                <FontAwesome5 name="quote-left" style={{ fontSize: 20 }} color="#000" />

                {/* <Text style={styles.text1}>It is a nature of the wise to resist pleasure,but the foolish to be a slave to them.</Text> */}
                <Text style={styles.text1}>{Quote}</Text>

                <FontAwesome5 name="quote-right" style={{ fontSize: 20, textAlign: 'right' }} color="#000" />

                <Text style={styles.authortext}>--- {Author}</Text>

                <TouchableOpacity onPress={() => { randomQuote() }} style={styles.touch}>
                    <Text style={styles.text3}>New Quotes</Text>
                </TouchableOpacity>

                <View style={styles.container2}>

                    <TouchableOpacity onPress={() => { }} style={{ borderWidth: 2, borderColor: '#5372F0', borderRadius: 50, padding: 15 }}>
                        <FontAwesome name="volume-up" size={22} color='#5372F0' />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }} style={{ borderWidth: 2, borderColor: '#5372F0', borderRadius: 50, padding: 15 }}>
                        <FontAwesome name="copy" size={22} color='#5372F0' />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {  }} style={{ borderWidth: 2, borderColor: '#5372F0', borderRadius: 50, padding: 15 }}>
                        <FontAwesome name="share" size={22} color='#5372F0' />
                    </TouchableOpacity>
                    <Back/> 
                    {/* this is for back handler for exit the app */}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5372F0',
    },
    container1: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
        marginBottom: 15,
    },
    text1: {
        color: '#000',
        fontSize: 16,
        lineHeight: 26,
        letterSpacing: 1.1,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    touch: {
        backgroundColor: '#5372F0',
        padding: 20,
        borderRadius: 30,
        marginVertical: 20,
        alignItems: 'center',
    },
    text3: {
        color: 'white',
        fontSize: 18,
    },
    authortext: {
        textAlign: 'right',
        fontWeight: '300',
        fontStyle: 'italic',
        fontSize: 16,
        color: '#000',
        top: 5,
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});
