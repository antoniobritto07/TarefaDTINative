import { StackNavigationProp } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamsList } from "../../types/navigation";;

function Description(): ReactElement {

    return (
        <View>
            <Text>Página de teste da navegation</Text>
        </View>
    )
}

export default Description;