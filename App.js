import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Menu from './src/screens/Menu';
import CadastroUser from './src/screens/CadastroUser';
import CadastroPizza from './src/screens/CadastroPizza';


import { LogBox } from 'react-native';
import ModeloExpo from './src/screens/ModeloExpo';
import Desenvolvedor from './src/screens/Desenvolvedor';
import Arquitetura from './src/screens/Arquitetura';

LogBox.ignoreLogs([
  'AsyncStorage'
])

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>

        <Stack.Screen
          name="Login"
          component={Login}
          options={
            {
              title: "Login",
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#de6118'
              },
              headerTitleStyle: {
                fontSize: 30
              },
            }
          }
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={
            {
              title: "Menu",
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#de6118'
              },
              headerTitleStyle: {
                fontSize: 30
              },
            }
          }
        />
        <Stack.Screen
          name="CadastroUser"
          component={CadastroUser}
          options={
            {
              title: "Registro de Usuários",
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#de6118'
              },
              headerTitleStyle: {
                fontSize: 25
              },
            }
          }
        />
        <Stack.Screen
          name="CadastroPizza"
          component={CadastroPizza}
          options={
            {
              title: "Registro de Usuários",
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#de6118'
              },
              headerTitleStyle: {
                fontSize: 25
              },
            }
          }
        />
        <Stack.Screen
          name="ModeloExpo"
          component={ModeloExpo}
          options={
            {
              title: "ModeloExpo",
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#de6118'
              },
              headerTitleStyle: {
                fontSize: 25
              },
            }
          }
        />
        <Stack.Screen
          name="Desenvolvedor"
          component={Desenvolvedor}
          options={
            {
              title: "Desenvolvedor",
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#de6118'
              },
              headerTitleStyle: {
                fontSize: 25
              },
            }
          }
        />
        <Stack.Screen
          name="Arquitetura"
          component={Arquitetura}
          options={
            {
              title: "Arquitetura",
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#de6118'
              },
              headerTitleStyle: {
                fontSize: 25
              },
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


