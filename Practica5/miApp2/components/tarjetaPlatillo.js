import React from 'react';
import { View, Text, StyleSheet} from "react-native";

export function tarjetaPlatillo(props){
        const [nombre, setNombre] = useState('');
        const [precio, setprecio] = useState('');
        const [paisOrigen, setpaisOrigen] = useState('');
        const [observacion, setObservacion] = useState('');
    
        const enviarRegistro = ()=>{
        
                // Verifica que los campos de nombre, carrera o semestre no estén vacíos
                // El operador || permite evaluar varias condiciones y ejecutar el if si alguna se cumple
                if(
                    nombre === '' ||
                    precio === '' ||
                    paisOrigen === ''
                ){
        
                    Alert.alert(
                        "Campos incompletos",
                        "Debes llenar todos los campos."
                    );
        
                }
                else{
        
        
                    Alert.alert(
                        "Registro enviado",
        
                        "Nombre: " + nombre +
                        "\precio: " + precio +
                        "\paisOrigen: " + paisOrigen 
                    );
        
                }
        
            }


    return(
        <View style={styles.card}>
            <Text>Nombre: {props.nombre}</Text>

            <Text>precio: {props.precio}</Text>

            <Text>paisOrigen: {props.paisOrigen}</Text>

             <TextInput
                placeholder="Nombre completo"
                value={nombre}
                onChangeText={setNombre}
                style={styles.input}
            />
            
            
            <TextInput
                placeholder="precio"
                value={precio}
                onChangeText={setprecio}
                style={styles.input}
            />
            
            
            <TextInput
                placeholder="paisOrigen"
                value={paisOrigen}
                onChangeText={setpaisOrigen}
                style={styles.input}
            />

            <TextInput
                placeholder="Observaciones"
                value={observacion}
                onChangeText={setObservacion}
                style={styles.input}
            />
            
                    

        </View>
        
    )
    const [observacion, setObservacion] = useState(0);
    
        return (
            <View style={styles.container}>
    
                <Pressable
                    onPress={() => setObservacion(contador + 1)}
                    onLongPress={() => setObservacion(0)}l
                    style={({ pressed }) => [
                        styles.boton,
                        {
                            backgroundColor:
                                pressed ? '#FF6B6B' : '#6BCB77'
                        }
                    ]}
                >
                    <Text style={styles.textoBoton}>
                        Presióname para guardar la observacion
                    </Text>
    
                </Pressable>   
            </View>
        );
}
export default function SwitchScreen() {

    const [like, setlike] = useState(false);

    return (
            <Switch
                value={like}
                onValueChange={setlike}
                trackColor={{
                    false: '#767577',
                    true: '#81b0ff'
                }}
                thumbColor={
                    like
                        ? '#2196F3'
                        : '#f4f3f4'
                }
            />
    );
}

const styles=StyleSheet.create({
    card:{
    backgroundColor:'#6BCB77',
    padding:15,
    margin:10,
    borderRadius:10
    }
});