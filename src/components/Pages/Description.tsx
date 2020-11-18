import { RouteProp, Router } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamsList } from "../../types/navigation";;

type ProfileScreenRouteProp = RouteProp<RootStackParamsList, 'Description'>;

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamsList,
    'Description'
>;

function Description(): ReactElement {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Descrição</Text>
            <ul>
                <View>
                    <Text style={styles.primaryLabel}>Nome do criador da aplicação:</Text>
                </View>
                <View>
                    <Text style={styles.secondaryLabel}>Antônio Britto</Text>
                </View>
            </ul>
            <ul>
                <View>
                    <Text style={styles.primaryLabel}>Cargo na CPE</Text>
                </View>
                <View>
                    <Text style={styles.secondaryLabel}>Consultor de Tecnologia</Text>
                </View>
            </ul>
            <ul>
                <View >
                    <Text style={styles.primaryLabel}>Data de início da aplicação:</Text>
                </View>
                <View>
                    <Text style={styles.secondaryLabel}>17/11/2020</Text>
                </View>
            </ul>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-evenly',
        width: '100vw',
        height: '100vh'
    },
    title: {
        fontSize: 30,
        color: "blue",
        marginBottom: "50px"
    },
    primaryLabel: {
        fontSize: 20,
        marginBottom: "20px"
    },
    secondaryLabel: {
        fontSize: 15
    }
})

export default Description;