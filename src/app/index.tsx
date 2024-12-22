import { Header } from '@/components/header'
import { MemoListItem } from '@/features/memo/components/memo-list-item'
import { View } from 'react-native'
import { Text } from 'react-native'

const Home = () => {
  return (
    <View className="flex-1 bg-white">
      {/* ヘッダー */}
      <Header />

      {/* メモリスト */}
      <View>
        <MemoListItem />
      </View>

      {/* 追加ボタン */}
      <View>
        <Text>+</Text>
      </View>
    </View>
  )
}

export default Home
