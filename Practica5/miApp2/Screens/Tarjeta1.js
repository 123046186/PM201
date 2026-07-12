
/* Zona1: Importaciones de archivos y componentes */

import { StatusBar } from 'expo-status-bar';
/* import { Component } from 'react';*/
import { StyleSheet, Text, View, Image } from 'react-native';
import {Perfil} from '../components/tarjetaPlatillo';

/* Zona 2: Main - componentes */
export default function App() {
  return (
    <View style={styles.container}>
        <tarjetaPlatillo styles={styles.tarjetaVerde}nombre="Salami" precio="23" paisOrigen="USA"/>
        <tarjetaPlatillo styles={styles.tarjetaVerde}nombre="Salami" precio="23" paisOrigen="USA"/>
        <tarjetaPlatillo styles={styles.tarjetaVerde}nombre="Salami" precio="23" paisOrigen="USA"/>
    </View>
  );
}
/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  tarjetaVerde:{backgroundColor: '#6BCB77',},
  tarjetaRoja:{backgroundColor: '#FF6B6B',},
});