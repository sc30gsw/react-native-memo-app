import { MemoDeleteButton } from '@/features/memo/components/memo-delete-button'
import { Memo } from '@/features/memo/types/memo'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale/ja'
import { Link } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

type MemoListItemProps = {
  memo: Memo
}

export const MemoListItem = ({ memo }: MemoListItemProps) => {
  return (
    <Link href={`memo/details/${memo.id}`} asChild={true}>
      <TouchableOpacity className="bg-white flex-row justify-between items-center py-4 px-[19px] border-b border-gray-300">
        <View className="flex-1 mr-2">
          <Text numberOfLines={1} className="text-lg leading-8 truncate">
            {memo.content}
          </Text>
          <Text className="text-xs text-gray-500">
            {format(memo.updatedAt.toDate(), 'yyyy年MM月dd日 HH:mm', {
              locale: ja,
            })}
          </Text>
        </View>
        <MemoDeleteButton id={memo.id} />
      </TouchableOpacity>
    </Link>
  )
}
