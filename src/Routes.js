import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Paginas/Home';
import Sobre from './Paginas/Sobre';

const Stack = createStackNavigator();

function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Sobre" component={Sobre} />                        
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Route;