import React from "react";
import { View, Text, StyleSheet, SectionList } from 'react-native';

export default function SectionListScreen(){
    const datos= [
        {
            title: 'Ingenieria en Sistemas',
            data: [
                [
                    {nombre: 'Erick'},
                    { nombre: 'Javier' }
                ]
            ]
        },
        {
            title: 'administracion',
            data: [
                [
                    {nombre: 'ana'},
                    { nombre: 'juan' }
                ]
            ]
        },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Estudiantes por carrera
            </Text>

            <SectionList
                sections={datos}
                renderSectionHeader={({ section }) => (
                    <Text style={styles.header}>
                        {section.title}
                    </Text>
                )}
                renderItem={ ({ item })  => (
                    <Text style={styles.item}>
                        {item.nombre}
                    </Text>
                )}
            />
        </View>
    );
}