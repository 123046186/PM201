import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Switch, Alert, Button} from 'react-native';

export default function RegistroEvento(){


    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');

    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deportes, setDeportes] = useState(false);



    const enviarRegistro = ()=>{

        // Verifica que los campos de nombre, carrera o semestre no estén vacíos
        // El operador || permite evaluar varias condiciones y ejecutar el if si alguna se cumple
        if(
            nombre === '' ||
            carrera === '' ||
            semestre === ''
        ){

            Alert.alert(
                "Campos incompletos",
                "Debes llenar todos los campos."
            );

        }
        // con isNaN
        //Si el semestre ingresado no es un número, mostrar un mensaje de error indicando que debe ingresar un valor numérico
        //isNan basicamente nos validad que el valor de semestre es un numero para devolver True o False, esto es para que nos muestre la notificacion de que debe ser un numero
        else if(isNaN(semestre)){

            Alert.alert(
                "Error",
                "El semestre debe ser un número."
            );

        }
        else{


            Alert.alert(
                "Registro enviado",

                "Nombre: " + nombre +
                "\nCarrera: " + carrera +
                "\nSemestre: " + semestre +
                "\nTaller: " + (taller ? "Sí" : "No") +
                "\nConstancia: " + (constancia ? "Sí" : "No") +
                "\nDeportes: " + (deportes ? "Sí" : "No")
            );


        }


    }



    return(

        <View style={styles.container}>


            <Text style={styles.title}>
                Registro de Evento Universitario
            </Text>



            <TextInput
                placeholder="Nombre completo"
                value={nombre}
                onChangeText={setNombre}
                style={styles.input}
            />


            <TextInput
                placeholder="Carrera"
                value={carrera}
                onChangeText={setCarrera}
                style={styles.input}
            />


            <TextInput
                placeholder="Semestre"
                value={semestre}
                onChangeText={setSemestre}
                keyboardType="numeric"
                style={styles.input}
            />



            <Text style={styles.subtitle}>
                Opciones
            </Text>



            <View style={styles.fila}>

                <Text>
                    ¿Asistirá al taller?
                </Text>


                <Switch
                    value={taller}
                    onValueChange={setTaller}
                    trackColor={{
                        false:'#767577',
                        true:'#81b0ff'
                    }}
                    thumbColor={
                        taller 
                        ? '#2196F3'
                        : '#f4f3f4'
                    }
                />


            </View>




            <View style={styles.fila}>

                <Text>
                    ¿Requiere constancia?
                </Text>


                <Switch
                    value={constancia}
                    onValueChange={setConstancia}
                    trackColor={{
                        false:'#767577',
                        true:'#81b0ff'
                    }}
                    thumbColor={
                        constancia
                        ? '#2196F3'
                        : '#f4f3f4'
                    }
                />


            </View>




            <View style={styles.fila}>

                <Text>
                    ¿Participará en deportes?
                </Text>


                <Switch
                    value={deportes}
                    onValueChange={setDeportes}
                    trackColor={{
                        false:'#767577',
                        true:'#81b0ff'
                    }}
                    thumbColor={
                        deportes
                        ? '#2196F3'
                        : '#f4f3f4'
                    }
                />


            </View>




            <Button
                title="Enviar Registro"
                onPress={enviarRegistro}
            />


        </View>


    );


}




const styles = StyleSheet.create({


    container:{
        flex:1,
        padding:20,
        backgroundColor:'#fefefe'
    },


    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'#4A90E2',
        textAlign:'center',
        marginBottom:20
    },


    subtitle:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:20,
        marginBottom:10
    },


    input:{
        borderWidth:1,
        borderColor:'#ccc',
        borderRadius:12,
        padding:12,
        marginTop:10,
        backgroundColor:'#f9f9f9'
    },


    fila:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:15
    }


});