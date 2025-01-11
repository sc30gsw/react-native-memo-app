import { Fontisto } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export const MemoListItem = () => {
  return (
    <Link href={'/memo/detail'} asChild={true}>
      <TouchableOpacity className="bg-white flex-row justify-between items-center py-4 px-[19px] border-b border-gray-300">
        <View>
          <Text className="text-lg leading-8">買い物リスト</Text>
          <Text className="text-xs text-gray-500">2023年10月1日 10:00</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-zinc-400 font-bold">
            <Fontisto name="close-a" size={16} />
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}
