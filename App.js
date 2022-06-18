import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/screen_users/Login';
import Menu from './src/screens/screen_users/Menu';
import CadastroUser from './src/screens/screen_users/CadastroUser';
import CadastroPizza from './src/screens/screen_admin/CadastroPizza';
import { LogBox } from 'react-native';
import ModeloExpo from './src/screens/screen_users/ModeloExpo';
import Desenvolvedor from './src/screens/screen_users/Desenvolvedor';
import Arquitetura from './src/screens/screen_users/Arquitetura';
import UpdateCadastroPizza from './src/screens/screen_admin/UpdateCadastroPizza';

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
              title: "Modelo Expo",
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
        <Stack.Screen
          name="UpdateCadastroPizza"
          component={UpdateCadastroPizza}
          options={
            {
              title: "Atualizar Cadastro",
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


