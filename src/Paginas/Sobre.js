import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Sobre({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Página Sobre</Text>
            <Button
                title="Ir Para Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}
