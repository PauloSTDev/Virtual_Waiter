import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ModeloExpo() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
          <Text style={styles.titulo}>
            Modelo Expo utilizado
          </Text>
          <Text style={styles.subtitulo}>
            Foi escolhido esse modelo por ser mais simples a implementação devido ter sido feito em aula,
            tambêm é uma forma de implementação mais rápida para se fazer.
          </Text>
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
    textAlign: "center",
    paddingBottom: 20,
    fontSize: 25,
  },
  subtitulo: {
    paddingTop: 30,
    fontSize: 19,
  },
})