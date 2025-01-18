import { View } from 'react-native'

export const Spinner = () => {
  return (
    <View className="flex items-center my-4">
      <View className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent" />
    </View>
  )
}
