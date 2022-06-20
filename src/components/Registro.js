import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import * as DeleteService from '../services/firebase_firestore_database_services/DeleteService';
import * as GetImage from "../services/firebase_storage_service/GetImage"
import { useState } from 'react';

export default function Registro(props) {
    
    const [url, setUrl] = useState()

    const data = props.dados;

    const buscarImagem = async () => {
        const imagem = await GetImage.get(props.props.route.params.tipo, props.dados.imagem_id)
        setUrl(imagem)
      }
      useEffect(() => {
        console.log("Registro.js: "+props.props.route.params.tipo);
        buscarImagem()
      }, [])
      

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
                        <Text style={styles.campo}>Nome Produto</Text>
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
                        <Text style={styles.campo}>Imagem:</Text>
                        <Image
                            style={styles.image}
                            source={{ uri: url}}
                        />
                    </View>
                </View>
                <View style={styles.linha}>
                    <View style={styles.coluna}>
                        <Button title='Editar' color={'red'} onPress={() => props.navigation.navigate("UpdateCadastro", { data })} />
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
        paddingBottom: 25,
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
    image: {
        width: 200,
        height: 90,
        resizeMode: "cover",
    }
})