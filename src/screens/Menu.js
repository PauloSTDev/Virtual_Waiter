import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React, { useLayoutEffect } from 'react'
import * as loginService from '../services/LoginService'


export default function Menu(props) {

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
      headerLeft: () => <Button title='+' onPress={() => console.log("Aqui será o Drawer")} color={"#de6118"} />,
      headerRight: () => <Button title='Logoff' onPress={logoff} color={"#de6118"}/>
    })

  }, [])


  
  return (
    <View>
      
      <Text>Menu</Text>
    </View>
  )
}

const styles = StyleSheet.create({


})