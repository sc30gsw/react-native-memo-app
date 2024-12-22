import React from 'react'
import { Text, View } from 'react-native'

export const AddButton = () => {
  return (
    <View className="size-16 rounded-full bg-blue-500 items-center justify-center absolute bottom-10 right-10 shadow-lg">
      <Text className="text-white text-4xl">+</Text>
    </View>
  )
}
