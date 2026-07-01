import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

export function SplashScreen({cambiarPantalla}) {

    useEffect(() => {

        const tiempo = setTimeout(() => {
            cambiarPantalla();
        }, 3000);

        return () => clearTimeout(tiempo);

    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Mi aplicación
            </Text>

            <Text>
                Cargando...
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});