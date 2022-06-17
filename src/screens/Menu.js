import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as loginService from '../services/firebase_authentication_service/LoginService'
import { FloatingAction } from "react-native-floating-action";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Menu(props) {

  const actions = [
    {
      text: "Cadastro de Pizzas",
      icon: <AntDesign name="edit" size={24} color="white" />,
      name: "CadastroPizza",
      position: 3,
      color: '#de6118',
    },
    {
      text: "Modelo Expo",
      icon: <MaterialCommunityIcons name="react" size={24} color="white" />,
      name: "ModeloExpo",
      position: 2,
      color: '#de6118'
    },
    {
      text: "Desenvolvedor",
      icon: <MaterialIcons name="group-work" size={24} color="white" />,
      name: "Desenvolvedor",
      position: 1,
      color: '#de6118',

    },
    {
      text: "Arquitetura",
      icon: <MaterialIcons name="engineering" size={24} color="white" />,
      name: "Arquitetura",
      position: 0,
      color: '#de6118',
    },
  ];

  const { navigation } = props

  const logoff = async () => {

    try {
      await loginService.logoff()
      navigation.replace("Login")
    } catch (error) {
      Alert.alert(error)
    }

  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerLeft: () => <Button title='Config' onPress={() => navigation.navigate("CadastroPizza")} color={"#de6118"} />,
      headerRight: () => <Button title='Logoff' onPress={logoff} color={"#de6118"} />
    })

  }, [])


  return (
    <View style={styles.container}>
      <FloatingAction
        actions={actions}
        color={"#de6118"}
        onPressItem={name => {
          if (name == "Menu") {
            console.log("Já estamos na Screen selecionada");
          }
          else {
            navigation.navigate(name)
          }
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
    //justifyContent: 'center',
}

})