import { Spinner } from '@/components/ui/spinner'
import { MEMO_CACHE_KEY } from '@/constants'
import { MemoForm } from '@/features/memo/components/memo-form'
import { fetchMemo } from '@/features/memo/server/fetch-memo'
import { useQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'

const MemoEdit = () => {
  const { id } = useLocalSearchParams()

  const { data, isLoading, error } = useQuery({
    queryKey: [`${MEMO_CACHE_KEY}/${id}`],
    queryFn: () => fetchMemo(id as string),
  })

  if (isLoading || !data) {
    return <Spinner />
  }

  if (error) {
    return (
      <View className="flex-1 items-center my-8">
        <Text className="font-bold text-xl text-red-500">
          Something went wrong.
        </Text>
      </View>
    )
  }

  return <MemoForm memo={data} />
}

export default MemoEdit
