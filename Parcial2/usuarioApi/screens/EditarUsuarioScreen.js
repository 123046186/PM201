import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";

import { useLocalSearchParams, router } from "expo-router";

export default function EditarUsuarioScreen() {

  const { id, nombre, edad } = useLocalSearchParams();

  const [nuevoNombre, setNuevoNombre] = useState(nombre);
  const [nuevaEdad, setNuevaEdad] = useState(edad);

  const actualizarUsuario = async () => {

    if (nuevoNombre.trim() === "" || nuevaEdad.trim() === "") {

      Alert.alert("Error", "Todos los campos son obligatorios");

      return;
    }

    try {

      const respuesta = await fetch(
        `http://10.181.42.248:5000/v1/usuarios/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: nuevoNombre,
            edad: Number(nuevaEdad),
          }),
        }
      );

      if (respuesta.ok) {

        Alert.alert("Éxito", "Usuario actualizado");

        router.replace("/consulta");

      } else {

        Alert.alert("Error", "No fue posible actualizar");

      }

    } catch (error) {

      console.log(error);

      Alert.alert("Error", "Error de conexión");

    }

  };

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.titulo}>
          Editar Usuario
        </Text>

        <TextInput
          style={styles.input}
          value={nuevoNombre}
          onChangeText={setNuevoNombre}
          placeholder="Nombre"
        />

        <TextInput
          style={styles.input}
          value={String(nuevaEdad)}
          onChangeText={setNuevaEdad}
          keyboardType="numeric"
          placeholder="Edad"
        />

        <Pressable
          style={styles.boton}
          onPress={actualizarUsuario}
        >
          <Text style={styles.textoBoton}>
            Actualizar
          </Text>
        </Pressable>

      </View>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#F5F7FA",
  },

  card: {
    backgroundColor: "#FFF",
    padding: 25,
    borderRadius: 15,
    elevation: 5,
  },

  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#2563EB",
  },

  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  boton: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  textoBoton: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 17,
  },

});