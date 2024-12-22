import { Header } from '@/components/header'
import { AddButton } from '@/features/memo/components/add-button'
import { MemoListItem } from '@/features/memo/components/memo-list-item'
import { View } from 'react-native'

const MemoList = () => {
  return (
    <View className="flex-1 bg-white">
      {/* ヘッダー */}
      <Header />

      {/* メモリスト */}
      <View>
        <MemoListItem />
      </View>

      {/* 追加ボタン */}
      <AddButton />
    </View>
  )
}

export default MemoList
