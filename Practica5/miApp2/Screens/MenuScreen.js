//* Zona1: Importaciones de archivos y componentes */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import MiModal from "../components/MiModal";
import BottomSheet from "../components/BottomSheet";
import Componente_1 from "./Componente_1";
import TarjetasScreen from './TarjetasScreen';
import Componente1 from './Componente1';
import FlatListScreen from './Practica4/FlatListScreen';
import SectionListScreen from './Practica4/SectionListScreen';
import Practica9 from './practica9';
import PressableScreen from './pressableScreen';
import SwitchScreen from './SwitchScreen';
import { Components4_0 } from './Componente4_0';
import ComponenteAlert from './ComponenteAlerta';
import { ImagenFondo } from './ImagenFondo';
import { SplashScreen } from './SplashScreen';
import ComponentesNativosScreen from './ComponentesNativosScreen';
import LibrosScreen from './LibrosScreen';

import { Home } from './Home';

/* Zona 2: Main - componentes */
export default function App() {
    const [screen,setScreen]=useState('menu');
    switch(screen){
        case 'tarjetas':
            return <TarjetasScreen/>
        case 'Componente1':
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
        case 'imagenFondo':
            return <ImagenFondo style={styles.container}/>;
        case 'componentesNativos':
            return <ComponentesNativosScreen />;
        case 'home':
            return <Home/>;
        case 'splashScreen':
            return (
                <SplashScreen 
                    cambiarPantalla={() => setScreen('home')}
                />
            );         
        case 'libros':
            return <LibrosScreen />;
        case 'miModal':
            return <MiModal />;

        case 'bottomSheet':
            return <BottomSheet />;

        case 'Componente_1':
            return <Componente_1 />;
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
                <Button title='Imagen Bg' onPress={() => setScreen('imagenFondo')}/>
                <Button title='Splash' onPress={() => setScreen('splashScreen')}/>
                <Button title='componentesNativos' onPress={() => setScreen('componentesNativos')}/>
                <Button title="Practica Registro de Libros" onPress={() => setScreen('libros')}/>
                <Button title="Practica Mi Modal" onPress={() => setScreen('miModal')}/>
                <Button title="Practica Bottom Sheet" onPress={() => setScreen('bottomSheet')}/>
                <Button title="Practica Componente _1" onPress={() => setScreen('Componente_1')}/>
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