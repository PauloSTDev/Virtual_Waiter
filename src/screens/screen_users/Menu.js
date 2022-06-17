import { StyleSheet, Text, View, Button, Alert, Dimensions } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import * as Logoff from '../../services/firebase_authentication_service/Logoff'
import { FloatingAction } from "react-native-floating-action";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MapView, {Marker} from "react-native-maps";
import * as Location from "expo-location";


export default function Menu(props) {

  const [location, setlocation] = useState({
    coords: {
      latitude: -28.2450385,
      longitude: -52.4265506,
    }
  })

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
      await Logoff.logoff()
      navigation.replace("Login")
    } catch (error) {
      Alert.alert(error)
    }
  }

  const GetMyPosition = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return console.log("permissão negada!");
    } else {
      let myLocation = await Location.getCurrentPositionAsync({})
      console.log(myLocation);
      setlocation(myLocation)
    }
  }

  useLayoutEffect(() => {
    GetMyPosition()
    navigation.setOptions({
      headerTitleAlign: "center",
      headerLeft: () => <Button title='Config' onPress={() => navigation.navigate("CadastroPizza")} color={"#de6118"} />,
      headerRight: () => <Button title='Logoff' onPress={logoff} color={"#de6118"} />
    })
  }, [])


  return (
    <View style={styles.container}>
      <MapView
      style={styles.map}
      initialRegion={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}>
        
      {location && <Marker
      coordinate={{
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }}
      title="Minha posição"
      icon={require("../../../assets/my_location.png")}
      />  
    }
    </MapView>
      <FloatingAction
        actions={actions}
        color={"#de6118"}
        onPressItem={name => {
            navigation.navigate(name)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //justifyContent: 'center',
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }

})