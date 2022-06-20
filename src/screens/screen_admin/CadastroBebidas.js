import React, { useState, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import * as PostService from "../../services/firebase_firestore_database_services/PostService";
import * as GetService from "../../services/firebase_firestore_database_services/GetService";
import Registro from '../../components/Registro';

export default function CadastroBebidas(props) {

    const [form, setForm] = useState({})
    const {navigation } = props
    const [bebida, setbebida] = useState([])

    const buscarbebida = async () => {
        try {
            let dados = await GetService.get("bebidas")
            setbebida(dados)
        } catch (error) {

        }
    }

    useLayoutEffect(() => {
        buscarbebida()
        console.log(bebida);
    }, [])

    const efetuarCadastro = async () => {
        if (form.nome_produto && form.imagem_id && form.endereco) {
            try {
                await PostService.post("bebidas",form)
                Alert.alert("Dados Registrados com Sucesso")
                setForm({})
                navigation.navigate("Menu", { atualizar: true })
            } catch (error) {
                Alert.alert("Erro ao registrar", "Verifique os campos, em especial o endereço!")
            }
        } else {
            Alert.alert("Campos não preenchidos corretamente!")
        }
    }


    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center" }}>Informe os dados da Bebida:</Text>
            <View style={styles.input}>
                <TextInput
                    placeholder='Nome da Bebida'
                    value={form.nome_produto}
                    onChangeText={(value) => setForm(Object.assign({}, form, { nome_produto: value }))}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Id da Imagem'
                    value={form.imagem_id}
                    onChangeText={(value) => setForm(Object.assign({}, form, { imagem_id: value }))}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Endereço Completo'
                    value={form.endereco}
                    onChangeText={(value) => setForm(Object.assign({}, form, { endereco: value }))}

                />
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Button
                        title='Registrar bebida'
                        onPress={efetuarCadastro}
                        color={"#de6118"}
                    />
                </View>
            </View>
            <StatusBar style="auto" />

            <FlatList
                data={bebida}
                renderItem={({ item }) => <Registro dados={item} buscarbebida={buscarbebida} navigation={navigation} />}
                keyExtractor={item => item.key}
            />            
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
        //justifyContent: 'center',
    }, input: {
        borderWidth: 1,
        borderColor: "gray",
        margin: 5,
        width: "99%",
        padding: 3,
        borderRadius: 5
    },
    linha: {
        flexDirection: "row"
    },
    coluna: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 5
    },
});