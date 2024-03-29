import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/screen_users/Login';
import Menu from './src/screens/screen_users/Menu';
import CadastroUser from './src/screens/screen_users/CadastroUser';
import CadastroPizza from './src/screens/screen_admin/CadastroPizza';
import { LogBox } from 'react-native';
import ModeloExpo from './src/screens/screen_users/ModeloExpo';
import Sobre from './src/screens/screen_users/Sobre.js';
import Arquitetura from './src/screens/screen_users/Arquitetura';
import UpdateCadastro from './src/screens/screen_admin/UpdateCadastro';
import CadastroProdutos from './src/screens/screen_admin/CadastroProdutos';
import Faq from './src/screens/screen_users/Faq';

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
              title: "Cadastro de Pizzas",
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
          name="Sobre"
          component={Sobre}
          options={
            {
              title: "Sobre",
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
          name="UpdateCadastro"
          component={UpdateCadastro}
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
        <Stack.Screen
          name="CadastroProdutos"
          component={CadastroProdutos}
          options={
            {
              title: "Cadastro de Produtos",
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
          name="Faq"
          component={Faq}
          options={
            {
              title: "Faq",
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


