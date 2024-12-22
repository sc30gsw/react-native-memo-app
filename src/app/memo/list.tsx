import { Header } from '@/components/header'
import { CircleButton } from '@/features/memo/components/circle-button'
import { MemoListItem } from '@/features/memo/components/memo-list-item'
import { View } from 'react-native'

export const MemoList = () => {
  return (
    <View className="flex-1 bg-white">
      {/* ヘッダー */}
      <Header />

      {/* メモリスト */}
      <View>
        <MemoListItem />
      </View>

      {/* 追加ボタン */}
      <CircleButton icon="+" />
    </View>
  )
}

export default MemoList
