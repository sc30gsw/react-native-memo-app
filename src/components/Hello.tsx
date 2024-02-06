import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: '900',
    padding: 16,
  },
})

export const Hello = () => {
  return (
    <View>
      <Text style={styles.text}>Form</Text>
    </View>
  )
}
