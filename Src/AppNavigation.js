import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Splashscreen } from "./SplashScreen";
import { Home } from "./Home";

const Stack = createStackNavigator();
export function Navigate(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splashscreen}  />
                <Stack.Screen options={{ headerShown: false }} name="Home" component={Home}  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}