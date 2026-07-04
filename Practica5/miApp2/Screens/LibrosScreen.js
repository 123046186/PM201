/* Zona 1: Importaciones */

import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ActivityIndicator,
    FlatList,
    Alert
} from 'react-native';

import { SplashScreen } from './SplashScreen';

const fondo = require('../assets/rarauw.jpeg');

/* Zona 2: Main - Componentes */

export default function LibrosScreen(){

    const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

    const [mostrarSplash, setMostrarSplash] = useState(true);

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');

    const [libros, setLibros] = useState([]);

    const [loading, setLoading] = useState(false);

    if(mostrarSplash){

        return(
            <SplashScreen
                cambiarPantalla={() => setMostrarSplash(false)}
            />
        );

    }

    const agregarLibro = () => {

        if(
            titulo === '' ||
            autor === '' ||
            genero === ''
        ){

            Alert.alert(
                'Campos vacíos',
                'Todos los campos son obligatorios.'
            );

            return;
        }

        setLoading(true);

        setTimeout(() => {

            const nuevoLibro = {

                id: Date.now().toString(),
                titulo,
                autor,
                genero

            };

            setLibros([...libros, nuevoLibro]);

            setTitulo('');
            setAutor('');
            setGenero('');

            setLoading(false);

            Alert.alert(
                'Éxito',
                'Libro agregado correctamente.'
            );

        },4000);

    };

    return(

        <ImageBackground
            source={fondo}
            style={styles.container}
            resizeMode="cover"
            imageStyle={{opacity:0.8}}
            blurRadius={4}
        >

        <KeyboardAvoidingView
            style={styles.contenido}
            behavior={behavior}
        >

            <Text style={styles.titulo}>
                Registro de Libros
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Título del libro"
                value={titulo}
                onChangeText={setTitulo}
            />

            <TextInput
                style={styles.input}
                placeholder="Autor"
                value={autor}
                onChangeText={setAutor}
            />

            <TextInput
                style={styles.input}
                placeholder="Género"
                value={genero}
                onChangeText={setGenero}
            />

            <Pressable
                style={styles.boton}
                onPress={agregarLibro}
                disabled={loading}
            >
                <Text style={styles.textoBoton}>
                    Agregar Libro
                </Text>
            </Pressable>

            <ActivityIndicator
                size="large"
                color="blue"
                animating={loading}
            />

            <FlatList

                data={libros}

                keyExtractor={(item)=>item.id}

                renderItem={({item})=>(

                    <View style={styles.tarjeta}>

                        <Text style={styles.nombre}>
                            {item.titulo}
                        </Text>

                        <Text>
                            Autor: {item.autor}
                        </Text>

                        <Text>
                            Género: {item.genero}
                        </Text>

                    </View>

                )}

            />

        </KeyboardAvoidingView>

        </ImageBackground>

    );

}

/* Zona 3: Estilos */

const styles = StyleSheet.create({

    container:{
        flex:1
    },

    contenido:{
        flex:1,
        padding:20,
        justifyContent:'center'
    },

    titulo:{
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center',
        color:'white',
        marginBottom:20
    },

    input:{
        backgroundColor:'white',
        borderRadius:8,
        padding:10,
        marginBottom:10
    },

    boton:{
        backgroundColor:'#6484b1',
        padding:12,
        borderRadius:8,
        alignItems:'center',
        marginBottom:20
    },

    textoBoton:{
        color:'white',
        fontWeight:'bold'
    },

    tarjeta:{
        backgroundColor:'white',
        borderRadius:10,
        padding:12,
        marginTop:10
    },

    nombre:{
        fontWeight:'bold',
        fontSize:18
    }

});