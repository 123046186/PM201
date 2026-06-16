



import { Text,Button, View, StyleSheet } from 'react-native'
import React,{useState} from 'react'

/* usando desestructuracion */
export const Perfil = ({nombre,carrera,materia,cuatri,styles}) => {
    const [mostrar, setMostrar] = useState(false)

    return (
        <View style={[estilos.tarjeta, styles]}>
            <Text style={estilos.nombre}> {nombre} </Text>

            {mostrar &&
            <>
            <Text style={estilos.carrera}>{carrera}</Text>
            <Text style={estilos.otroTexto}>{materia}</Text>
            <Text style={estilos.otroTexto}>{cuatri}</Text>
            </>
            }

           <Button title="Ver perfil" on onPress={ ()=> setMostrar(!mostrar)}/>
        </View>
    )
}

const estilos= StyleSheet.create({
    nombre:{
        fontSize:24,
        fontWeight:600,
        textTransform:'uppercase',
    },
    carrera:{
        fontSize:18,
        color:'blue',
        fontFamily:'Roboto',
    },
    otroTexto:{
        fontSize:12,
        fontFamily:'Courier',
        fontStyle:'italic',
    },
    tarjeta:{
        borderWidth:13,
        padding:25,
        margin:20,
    },
});

/* Usando promps */
/* export const Perfil = (props) => {
    return (
        <View>
            <Text>{props.nombre}</Text>
            <Text>{props.carrera}</Text>
            <Text>{props.materia}</Text>
            <Text>{props.cuatri}</Text>
        </View>
    )
} */