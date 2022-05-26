import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import Menu from './src/screens/Menu';
import CadastroUser from './src/screens/CadastroUser';


import { LogBox } from 'react-native';

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
              headerTintColor: 'black',
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
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


