import { NavigationContainer, RouteProp, Router } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamsList } from "../../types/navigation";;

type ProfileScreenRouteProp = RouteProp<RootStackParamsList, 'Description'>;

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamsList,
    'Description'
>;

type Props = {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
}

function Result({ route, navigation }: Props): ReactElement {

    const { resultShow }: any = route.params;

    return (
        <View style={[styles.container]}>
            <Text style={styles.title}>O resultado da soma é:</Text>
            <Text style={styles.subtitle}> {resultShow} </Text>
            <Button title="Sobre criador" onPress={() => navigation.navigate('Description')} />
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
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        color: "blue",
        marginBottom: "50px"
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: "250px"
    },
})

export default Result;