import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

export default function Arquitetura() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.titulo}>
            Arquitetura é baseada em dividir o máximo possivel os serviços e pastas do projeto por sua devida responsabilidade:
          </Text>
          <Text style={styles.titulo}>
            Dentro da pasta src teremos back-end, components, screens e services.
          </Text>
          <Text style={styles.titulo}>
            Em back-end existe o arquivo de configurações da conexão com o Firebase.
          </Text>
          <Text style={styles.titulo}>
            Components: Contêm os components que serão usados no App afim de facilitar a manutenção.
          </Text>
          <Text style={styles.titulo}>
            Screens: Temos uma pasta para screens de acesso Admin e outra para users normais contendo seus devidos arquivos.
          </Text>
          <Text style={styles.titulo}>
            Services: Teremos 4 pastas, firebase_authentication_service que é responsavel pela autenticação de logoff, firebase_firestore_database_services, firebase_storage_services e google_geocoding_api_services contendo seus devidos arquivos e responsabilidades.
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
    paddingBottom: 20,
    fontSize: 20,
  },
})