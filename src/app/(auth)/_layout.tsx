import { Slot } from 'expo-router'
import { View } from 'react-native'

const AuthLayout = () => {
  return (
    <View className="flex-1 bg-slate-200">
      <Slot />
    </View>
  )
}

export default AuthLayout
