
/* Zona1: Importaciones de archivos y componentes */
/* Zona1: Importaciones de archivos y componentes */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import FlatListScreen from './Practica4/FlatListScreen';
import SectionListScreen from './Practica4/SectionListScreen';
import Practica9 from './practica9';
import PressableScreen from './pressableScreen';
import SwitchScreen from './SwitchScreen';
import { Components4_0 } from './Componente4_0';
import ComponenteAlert from './ComponenteAlerta';

/* Zona 2: Main - componentes */
export default function App() {
    const [screen,setScreen]=useState('menu');
    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>
        case 'Componente 1':
            return <Componente1/>
        case 'flatlist':
            return <FlatListScreen />;
        case 'SectionList':
            return <SectionListScreen/>
        case 'practica9':
            return <Practica9 />;
        case 'pressableScreen':
            return <PressableScreen />;
        case 'Switch':
            return <SwitchScreen />;
        case 'Componente4_0':
            return <Components4_0 />;
        case 'ComponenteAlerta':
            return <ComponenteAlert />;            
        case 'menu':
            default:
        return (
            <View>
                <Text> Menu de practica </Text>
                <Button title= "Practica tarjetas" onPress={()=>setScreen('tarjetas')}/>
                <Button title= "Practica Componente1" onPress={()=>setScreen('Componente1')}/>
                <Button title= "Practica FlatList" onPress={()=>setScreen('flatlist')}/>
                <Button title= "Practica SectionList" onPress={()=>setScreen('SectionList')}/>
                <Button title="Practica 9" onPress={() => setScreen('practica9')}/>
                <Button title="Practica Pressable" onPress={()=>setScreen('pressableScreen')}/>
                <Button title="Practica Switch" onPress={()=>setScreen('Switch')}/>
                <Button title="Practica TextInput" onPress={()=>setScreen('Componente4_0')}/>
                <Button title="Practica ComponenteAlerta" onPress={()=>setScreen('ComponenteAlerta')}/>
            </View>
        );//return
    }//switch
}//funcion

/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#570d0d',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});