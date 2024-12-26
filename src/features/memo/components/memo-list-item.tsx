import { Text, View } from 'react-native'

export const MemoListItem = () => {
  return (
    <View className="bg-white flex-row justify-between items-center py-4 px-[19px] border-b border-gray-300">
      <View>
        <Text className="text-lg leading-8">買い物リスト</Text>
        <Text className="text-xs text-gray-500">2023年10月1日 10:00</Text>
      </View>
      <View>
        <Text>X</Text>
      </View>
    </View>
  )
}
