import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import Welcome from '../screens/Welcome'
import RegisterScreen from '../screens/RegisterScreen'

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="Login" component = {LoginScreen} />
        <Stack.Screen name="Register" component = {RegisterScreen} />
    </Stack.Navigator>
);

export default AuthNavigator;