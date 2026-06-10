import { Text } from 'react-native'
import { Button, View } from 'react-native-web'
import React,{useState} from 'react'

/* usando desestructuracion */
export const Perfil = ({nombre,carrera,materia,cuatri}) => {
    const [mostrar, setMostrar] = useState(false)

    return (
        <View>
            <Text>{nombre}</Text>

            {mostrar &&
            <>
            <Text>{carrera}</Text>
            <Text>{materia}</Text>
            <Text>{cuatri}</Text>
            </>
            }

           <Button title="Ver perfil" on onPress={ ()=> setMostrar(!mostrar)}/>
        </View>
    )
}

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