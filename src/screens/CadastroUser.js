import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import * as loginService from "../services/firebase_authentication_service/LoginService"

export default function CadastroUser(props) {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { navigation } = props

    const efetuarCadastro = async () => {

        try {
            let retorno = await loginService.createUser(email, senha)
            Alert.alert(retorno)
            navigation.navigate("Login")
        } catch (error) {
            Alert.alert("Erro ao registrar usuário", error)
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Informe os dados abaixo</Text>
            <View style={styles.input}>
                <TextInput
                    placeholder='E-mail'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={(e) => setEmail(e)}

                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Senha'
                    autoCapitalize='none'
                    secureTextEntry
                    value={senha}
                    onChangeText={(e) => setSenha(e)}
                />
            </View>
            <View style={styles.linha}>
                <View style={styles.coluna}>
                    <Button
                        title='Registrar Usuário'
                        onPress={efetuarCadastro}
                        color={"#de6118"}
                    />
                </View>
            </View>
            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    
    titulo: {
        paddingBottom: 50,
        fontSize: 25,
    },
    input: {
        borderWidth: 1,
        borderColor: "black",
        margin: 5,
        width: "60%",
        padding: 3,
        borderRadius: 5
    },
    linha: {
        paddingTop: 50,
        flexDirection: "row"
    },
    coluna: {
        flex: 2,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 1,
    },

});