import { Memo } from '@/features/memo/types/memo'
import { Fontisto } from '@expo/vector-icons'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale/ja'
import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

type MemoListItemProps = {
  memo: Memo
}

export const MemoListItem = ({ memo }: MemoListItemProps) => {
  return (
    <Link href={'/memo/detail'} asChild={true}>
      <TouchableOpacity className="bg-white flex-row justify-between items-center py-4 px-[19px] border-b border-gray-300">
        <View>
          <Text numberOfLines={1} className="text-lg leading-8">
            {memo.content}
          </Text>
          <Text className="text-xs text-gray-500">
            {format(memo.updatedAt.toDate(), 'yyyy年MM月dd日 HH:mm', {
              locale: ja,
            })}
          </Text>
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
