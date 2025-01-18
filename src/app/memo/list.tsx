import { CircleButton } from '@/features/memo/components/circle-button'
import { MemoListItem } from '@/features/memo/components/memo-list-item'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { View } from 'react-native'

export const MemoList = () => {
  return (
    <View className="flex-1 bg-white">
      {/* メモリスト */}
      <View>
        <MemoListItem />
      </View>

      {/* 追加ボタン */}
      <View className="flex-1 items-end justify-end">
        <CircleButton
          icon={<Feather name="plus" size={40} color={'white'} />}
          onPress={() => router.push('/memo/create')}
        />
      </View>
    </View>
  )
}

export default MemoList
