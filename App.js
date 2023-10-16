import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigate } from './Src/AppNavigation';
import {Home} from './Src/Home';
import { Splashscreen } from './Src/SplashScreen';
export default function App() {
  return (
    <Navigate/>
    // <View style={styles.container}>
    //   <StatusBar style="auto"  />
    //   <Home/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
