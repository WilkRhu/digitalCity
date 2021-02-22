import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './Routes';

const Stack = createStackNavigator();

function App() {
    return <Routes/>;
}

export default App;
