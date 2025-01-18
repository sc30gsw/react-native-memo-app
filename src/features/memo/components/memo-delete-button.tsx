import { useDeleteMemo } from '@/features/memo/hooks/use-delete-memo'
import { Fontisto } from '@expo/vector-icons'
import { Text, TouchableOpacity } from 'react-native'

type MemoDeleteButtonProps = Record<'id', string>

export const MemoDeleteButton = ({ id }: MemoDeleteButtonProps) => {
  const { mutate, isPending } = useDeleteMemo()
  return (
    <TouchableOpacity onPress={() => mutate({ id })} disabled={isPending}>
      <Text className="text-zinc-400 font-bold">
        <Fontisto name="close-a" size={16} />
      </Text>
    </TouchableOpacity>
  )
}
