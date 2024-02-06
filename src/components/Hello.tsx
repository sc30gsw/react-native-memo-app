import React, { FC, ReactNode } from 'react'
import { StyleSheet, Text, TextStyle, View } from 'react-native'

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: '900',
    padding: 16,
  },
})

type HelloProps = Readonly<{
  children?: ReactNode
  bang?: boolean
  style?: TextStyle
}>

export const Hello: FC<HelloProps> = ({ children, bang, style }) => {
  return (
    <View>
      <Text style={[styles.text, style]}>
        Hello {children} {bang ? '!' : ''}
      </Text>
    </View>
  )
}
