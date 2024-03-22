import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from "../screen/SplashScreen";
import SigninScreen from '../screen/SigninScreen';
import {  WelcomeScreen } from '../screen';

const Stack = createStackNavigator();
const Navigators = () => {
  return (
   <NavigationContainer >
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Signin" component={SigninScreen} />
    <Stack.Screen name='Splash' component={SplashScreen}/>
    <Stack.Screen name='Welcome' component={WelcomeScreen}/>

   </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigators