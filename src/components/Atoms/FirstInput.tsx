import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

type InputProps = {
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
}

const FirstInput = ({
    value,
    onChangeText,
    error = ''
}: InputProps) => {

    return (
        <View>
            <Text style={styles.labelInput}>Data que vai ser somada com as horas:</Text>
            <TextInput
                onChangeText={(value) => onChangeText(value)}
                placeholder={'yyyy/mm/dd hh:mm'}
                style={styles.input}
            />
            <Text style={styles.errorMessage}>{error}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    labelInput: {
        fontSize: 15,
        paddingBottom: 8,
    },
    input: {
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 12,
        padding: 12,
    },
    errorMessage: {
        color: 'red',
    }
});

export default FirstInput;