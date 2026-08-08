import { Modal } from "react-native";
import { useState } from "react";
import React from 'react';
import {SafeAreaView,  View,  Text,  Pressable,  StyleSheet,} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function DetallesUsuarioScreen() {

  const { id, nombre, edad } = useLocalSearchParams();
  const [modalVisible, setModalVisible] = useState(false);
  const eliminarUsuario = async () => {

  try {

    const respuesta = await fetch(
      `http://10.104.208.248:5000/v1/usuarios/${id}`,
      {
        method: "DELETE",
      }
    );

    if (respuesta.ok) {

      setModalVisible(false);

      alert("Usuario eliminado");

      router.replace("/consulta");

    } else {

      alert("No fue posible eliminar");

    }

  } catch (error) {

    console.log(error);

    alert("Error de conexión");

  }

};
  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.titulo}>
          Detalles del Usuario
        </Text>

        <Text style={styles.label}>
          Nombre
        </Text>

        <Text style={styles.valor}>
          {nombre}
        </Text>

        <View style={styles.linea} />

        <Text style={styles.label}>
          Edad
        </Text>

        <Text style={styles.valor}>
          {edad} años
        </Text>

        <Pressable
          style={styles.botonActualizar}
          onPress={() =>
            router.push({
              pathname: "/editar",
              params: {
                id,
                nombre,
                edad,
              },
            })
          }
        >
          <Text style={styles.textoBoton}>
            Actualizar
          </Text>
        </Pressable>

        <Pressable
          style={styles.botonEliminar}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textoBoton}>
            Eliminar
          </Text>
        </Pressable>

      </View>
      <Modal
    visible={modalVisible}
    transparent={true}
    animationType="fade"
  >

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >

      <View
        style={{
          backgroundColor: "#FFF",
          width: "85%",
          borderRadius: 15,
          padding: 25,
        }}
      >

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 15,
          }}
        >
          ¿Eliminar usuario?
        </Text>

        <Text
          style={{
            textAlign: "center",
            marginBottom: 25,
          }}
        >
          ¿Estás seguro de eliminar este usuario?
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >

          <Pressable
            onPress={() => setModalVisible(false)}
            style={{
              backgroundColor: "#9CA3AF",
              padding: 12,
              borderRadius: 10,
              width: "45%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Cancelar
            </Text>
          </Pressable>

          <Pressable
            onPress={eliminarUsuario}
            style={{
              backgroundColor: "#DC2626",
              padding: 12,
              borderRadius: 10,
              width: "45%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontWeight: "bold",
              }}
            >
              Eliminar
            </Text>
          </Pressable>

        </View>

      </View>

    </View>

  </Modal>

  </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  card: {
    backgroundColor: '#FFF',
    padding: 25,
    borderRadius: 15,
    elevation: 5,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#2563EB',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },

  valor: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 15,
  },

  linea: {
    height: 1,
    backgroundColor: '#DDD',
    marginBottom: 15,
  },

  botonActualizar: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },

  botonEliminar: {
    backgroundColor: '#DC2626',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },

  textoBoton: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

});