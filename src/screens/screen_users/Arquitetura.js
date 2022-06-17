import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

export default function Arquitetura() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.titulo}>
            A arquitetura é baseada em dividir o máximo possivel os serviços e pastas do projeto por
            sua devida responsabilidade, afim de facilitar a manutenção, comprender melhor o código
            e o entender a importância de cada arquivo.
          </Text>
          <Text style={styles.titulo}>
            Dentro da pasta src temos 4 pastas, sendo: back-end, components, screens e services.
          </Text>
          <Text style={styles.titulo}>
            Em back-end:
          </Text>
          <Text style={styles.texto}>
            Contem o arquivo das configurações de conexão com o Firebase.
          </Text>
          <Text style={styles.titulo}>
            Components:
          </Text>
          <Text style={styles.texto}>
            Contêm os components que serão usados no App.
          </Text>
          <Text style={styles.titulo}>
            Screens:
          </Text>
          <Text style={styles.texto}>
            Temos uma pasta para screens de acesso Admin e outra para users normais contendo seus devidos arquivos.
          </Text>
          <Text style={styles.titulo}>
            Services é composto por 4 pastas:
          </Text>
          <Text style={styles.subtitulo}>
            firebase_authentication_service:
          </Text>
          <Text style={styles.texto}>
            Responsável pela autenticação de Login, Logoff e CreateUser.
          </Text>
          <Text style={styles.subtitulo}>
            firebase_firestore_database_services:
          </Text>
          <Text style={styles.texto}>
            Responsável pelo Get e Post do Firebase.
          </Text>
          <Text style={styles.subtitulo}>
            firebase_storage_services:
          </Text>
          <Text style={styles.texto}>
            Responsável pelo Get de Imagens do Firebase.
          </Text>
          <Text style={styles.subtitulo}>
            google_geocoding_api_services:
          </Text>
          <Text style={styles.texto}>
            Responsável pela pesquisa de latitude e longitude e validação de endereço.
          </Text>
        </ScrollView>

      </SafeAreaView>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titulo: {
    paddingBottom: 13,
    fontSize: 19,
  },
  subtitulo: {
    color: "#de6118",
    paddingBottom: 5,
    fontSize: 19,
  },
  texto: {
    paddingBottom: 20,
    fontSize: 16,
  }
})