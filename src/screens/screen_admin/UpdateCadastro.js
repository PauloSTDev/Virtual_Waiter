import { StyleSheet, Text, View, TextInput, Button, StatusBar, Alert } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import * as UpdateService from "../../services/firebase_firestore_database_services/UpdateService";

export default function UpdateCadastro(props) {
    const dados = props.route.params.data;
    const [form, setForm] = useState({})


    useLayoutEffect(() => {
        console.log("Dados: "+dados);
        setForm({
            nome_produto: dados.nome_produto,
            imagem_id: dados.imagem_id,
            endereco: dados.endereco
        })
    }, [props])

    const AtualizarCadastro = async () => {
        if (form.nome_produto && form.imagem_id && form.endereco) {

            try {
                await UpdateService.update(dados.tipo, form, dados.key)
                setForm({})
                props.navigation.navigate("Menu", { atualizar: true })
                Alert.alert("Dados Atualizados com Sucesso")
            } catch (error) {
                console.log("erros: "+error);
            }
        } else {
            Alert.alert("Campos não preenchidos corretamente!")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center" }}>Atualize os dados do Produto</Text>
            <View style={styles.input}>
                <TextInput
                    value={form.nome_produto}
                    onChangeText={(value) => setForm(Object.assign({}, form, { nome_produto: value }))}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    value={form.imagem_id}
                    onChangeText={(value) => setForm(Object.assign({}, form, { imagem_id: value }))}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    value={form.endereco}
                    onChangeText={(value) => setForm(Object.assign({}, form, { endereco: value }))}

                />
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Button
                        title='Enviar atualizações'
                        onPress={AtualizarCadastro}
                        color={"#de6118"}
                    />
                </View>
            </View>
            <StatusBar style="auto" />
        </View >
    )
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
})