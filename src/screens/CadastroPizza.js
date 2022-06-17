import React, { useState, useLayoutEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList } from 'react-native';
import * as pizzaService from "../services/PizzaService";
import Registro from '../components/Registro';
import { FloatingAction } from "react-native-floating-action";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function CadastroPizza(props) {

    const actions = [
        {
            text: "Registros",
            icon: <AntDesign name="edit" size={24} color="white" />,
            name: "registros",
            position: 4,
            color: '#de6118',

        
        },
        {
            text: "Home",
            icon: <AntDesign name="home" size={24} color="white" />,
            name: "home",
            position: 3,
            color: '#de6118',
        },
        {
            text: "Modelo Expo",
            icon: <MaterialCommunityIcons name="react" size={24} color="white" />,
            name: "modelo_expo",
            position: 2,
            color: '#de6118'
        },
        {
            text: "Desenvolvedor",
            icon: <MaterialIcons name="group-work" size={24} color="white" />,
            name: "desenvolvedor",
            position: 1,
            color: '#de6118',
      
        },
    ];

    const [form, setForm] = useState({})
    const {navigation } = props
    const [pizza, setPizza] = useState([])

    const buscarPizza = async () => {
        try {
            let dados = await pizzaService.getPizza()
            console.log(dados)
            setPizza(dados)
        } catch (error) {

        }
    }

    useLayoutEffect(() => {
        buscarPizza()
    }, [])

    const efetuarCadastro = async () => {
        if (form.nome_pizza && form.imagem && form.endereco) {
            try {
                await pizzaService.createPizza(form)
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
            <Text style={{ textAlign: "center" }}>Informe os dados da Pizza:</Text>
            <View style={styles.input}>
                <TextInput
                    placeholder='Nome da Pizza'
                    value={form.nome_pizza}
                    onChangeText={(value) => setForm(Object.assign({}, form, { nome_pizza: value }))}
                />
            </View>
            <View style={styles.input}>
                <TextInput
                    placeholder='Imagem'
                    value={form.imagem}
                    onChangeText={(value) => setForm(Object.assign({}, form, { imagem: value }))}

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
                        title='Registrar Pizza'
                        onPress={efetuarCadastro}
                        color={"#de6118"}
                    />
                </View>
            </View>
            <StatusBar style="auto" />

            <FlatList
                data={pizza}
                renderItem={({ item }) => <Registro dados={item} buscarPizza={buscarPizza} navigation={navigation} />}
                keyExtractor={item => item.key}
            />
            <FloatingAction
                actions={actions}
                color={"#de6118"}
                onPressItem={name => {
                    console.log(`selected button: ${name}`);
                }}
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