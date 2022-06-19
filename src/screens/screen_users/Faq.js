import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Faq() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Funcionalidades do Aplicativo:</Text>
      <Text style={styles.texto}>Localização do dispositivo, criar Marcações no mapa e consultar informar sobre, editar, atualizar e excluir marcações.</Text>
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
  texto: {
    paddingBottom: 20,
    fontSize: 20,
  }
})