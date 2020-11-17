import React, { ReactElement, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FirstInput from '../Atoms/FirstInput';

export default function Home(): ReactElement {

    const [date, setDate] = useState("");
    const [dateError, setDateError] = useState("");
    const [result, setResult] = useState("");

    const validateDate = (): void => {
        if (isNaN(Date.parse(date)) || date.length !== 16) {
            setDateError("Digite uma data válida.")
        } else {
            setDateError("")
        }
    }

    const formatDateToBR = (dateToFormat: Date) => {
        const day = dateToFormat.getDate().toString().padStart(2, '0')
        const month = (dateToFormat.getMonth() + 1).toString().padStart(2, '0') //+1 pois no getMonth Janeiro começa com zero.
        const year = dateToFormat.getFullYear();
        const hour = dateToFormat.getHours().toString().padStart(2, '0');
        const min = dateToFormat.getMinutes().toString().padStart(2, '0');
        const result = ` ${hour}:${min} ${day}/${month}/${year}`;
        return result;
    }

    const doSum = (value: number): void => {

        if (value) {
            const formattedDate = new Date(date)
            let CalculatedHour = new Date(date);
            CalculatedHour.setHours(formattedDate.getHours() + value)
            setResult(formatDateToBR(CalculatedHour));
        }
        else {
            setResult('');
        }
    }


    useEffect(() => {
        validateDate();
    }, [date])

    return (
        <View style={styles.container}>
            <View style={styles.titleArea}>
                <Text style={styles.title} >1º Desafio das capacitações de Native da DTI</Text>
                <Text style={styles.subtitle} >Get the date set at the first imput,
                and after it do the sum with the hours that was set at the second imput,
                 and show the result below</Text>
            </View>
            <View style={styles.inputArea}>
                <FirstInput value={date} onChangeText={setDate} error={date ? dateError : ''} />
                <TextInput
                    placeholder={"Digite o número de horas a serem somadas"}
                    onChangeText={(value: string) => doSum(Number(value))}
                    style={styles.input}
                />
            </View>
            <View>
                <Text style={styles.resultTitle}>Resultado:</Text>
                <Text style={styles.result}>{result}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-evenly',
    },
    titleArea: {
        width: 'auto',
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    studant: {
        fontSize: 20,
    },
    inputArea: {
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        color:"blue",
        marginBottom: "50px"
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "600",
    },
    input: {
        borderWidth: 2,
        borderRadius: 12,
        width: "256px",
        borderColor: '#000',
        padding: 12,
        marginTop: 10,
    },
    resultTitle: {
        fontSize: 30,
        marginBottom: "20px"
    },
    result: {
        fontSize: 18,
        color: 'green'
    }
});