import React, { FC, ReactNode } from 'react'
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

type HelloProps = Readonly<{ children?: ReactNode; bang?: boolean }>

export const Hello: FC<HelloProps> = ({ children, bang }) => {
  return (
    <View>
      <Text style={styles.text}>
        Hello {children} {bang ? '!' : ''}
      </Text>
    </View>
  )
}
