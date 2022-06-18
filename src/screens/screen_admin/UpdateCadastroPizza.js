import { StyleSheet, Text, View, TextInput, Button, StatusBar, Alert} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import * as UpdatePizzaService from "../../services/firebase_firestore_database_services/UpdatePizzaService";

export default function UpdateCadastroPizza(props) {
    const dados = props.route.params.data;
    const [form, setForm] = useState({})


    useLayoutEffect(() => {
        setForm({
            nome_pizza: dados.nome_pizza,
            imagem_id: dados.imagem_id,
            endereco: dados.endereco
        })
    }, [props])

    const AtualizarCadastro = async () => {
        if (form.nome_pizza && form.imagem_id && form.endereco) {
            try {
                await UpdatePizzaService.updatePizza(form, dados.key)
                setForm({})
                props.navigation.navigate("Menu", { atualizar: true })
                Alert.alert("Dados Atualizados com Sucesso")
            } catch (error) {
                Alert.alert("Erro ao registrar", "Verifique os campos, em especial o endereço!")
            }
        } else {
            Alert.alert("Campos não preenchidos corretamente!")
        }
    }
    
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: "center" }}>Atualize os dados da Pizza:</Text>
            <View style={styles.input}>
                <TextInput
                    value={form.nome_pizza}
                    onChangeText={(value) => setForm(Object.assign({}, form, { nome_pizza: value }))}
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