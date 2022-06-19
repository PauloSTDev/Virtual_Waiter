import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Desenvolvedor:</Text>
      <Text style={styles.texto}>Paulo Afonso Della Mêa dos Santos</Text>
      <Text style={styles.texto}>RA: 1121733</Text>
      <Text style={styles.texto}>Email: 1121733@imed.edu.br</Text>
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