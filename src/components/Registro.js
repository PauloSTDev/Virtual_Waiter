import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import * as DeleteService from '../services/firebase_firestore_database_services/DeleteService';

export default function Registro(props) {


    useEffect(() => {
        console.log("Dados: "+props.dados);
    }, [props])
    
    

    const data = props.dados;
    const excluir = () => {
        Alert.alert("Deseja Excluir:", "Esses dados serão apagados para sempre!", [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "OK", onPress: async () => {
                    try {
                        await DeleteService.deleteCollection(data.tipo, data.key)
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
        <View >
            <View style={styles.container}>
                <View style={styles.linha}>
                    <View style={styles.coluna}>
                        <Text style={styles.campo}>Nome do Produto:</Text>
                        <Text>{data.nome_produto}</Text>
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
                        <Text style={styles.campo}>Imagem Id:</Text>
                        <Text>{data.imagem_id}</Text>
                    </View>
                </View>
                <Image />
                <View style={styles.linha}>
                    <View style={styles.coluna}>
                        <Button title='Editar' color={'red'} onPress={() => props.navigation.navigate("UpdateCadastro", {data})} />
                    </View>
                    <View style={styles.coluna}>
                        <Button title='Excluir' color={'red'} onPress={excluir} />
                    </View>
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
        flexDirection: "row",
    },
    coluna: {
        paddingBottom: 10,
        flex: 1,
        flexDirection: "row",

    },
    campo: {
        width: 110
    },

    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
})