import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'
import * as pizzaService from '../services/PizzaService';

export default function Registro(props) {

    const data = props.dados;

    const excluirPizza = () => {


        Alert.alert("Deseja Excluir:", "Esses dados serão apagados para sempre!", [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "OK", onPress: async () => {
                    try {
                        await pizzaService.deletePizza(data.key)
                        Alert.alert("Dados Excluídos com Sucesso")
                        props.navigation.navigate("Menu", { atualizar: true })
                    } catch (error) {
                        Alert.alert("Você não possui permissão para excluir esse registro!")
                    }
                }
            }
        ])

    }


    return (
        <View style={styles.container}>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Text style={styles.campo}>Nome da Pizza:</Text>
                    <Text>{data.nome_pizza}</Text>
                </View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Text style={styles.campo}>Endereço:</Text>
                    <Text>{data.endereco}</Text>
                </View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Text style={styles.campo}>Imagem</Text>
                    <Text>{data.imagem}</Text>
                </View>
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                </View>
                <View style={styles.coluna}>
                </View>
                <View style={styles.coluna}>
                    <Button title='Excluir' color={'red'} onPress={excluirPizza} />
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "gray",
        margin: 5
    },
    linha: {
        flexDirection: "row"
    },
    coluna: {
        flex: 1,
        flexDirection: "row"
    },
    campo: {
        width: 110
    }

})