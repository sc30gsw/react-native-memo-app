import { Text, View } from 'react-native'

export const Header = () => {
  return (
    <View className="bg-blue-500 h-[104px] justify-end items-center">
      <View className="mb-2">
        <Text className="text-2xl font-bold text-white">Memo App</Text>
      </View>
      <View className="absolute bottom-4 right-4">
        <Text className="text-white opacity-70">ログアウト</Text>
      </View>
    </View>
  )
}
