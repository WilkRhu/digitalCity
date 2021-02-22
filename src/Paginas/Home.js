import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Home({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Página Home</Text>
            <Button
                title="Ir Para Sobre"
                onPress={() => navigation.navigate('Sobre')}
            />
        </View>
    );
}
