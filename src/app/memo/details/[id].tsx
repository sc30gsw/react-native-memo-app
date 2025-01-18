import { Spinner } from '@/components/ui/spinner'
import { MEMO_CACHE_KEY } from '@/constants'
import { CircleButton } from '@/features/memo/components/circle-button'
import { fetchMemo } from '@/features/memo/server/fetch-memo'
import { Foundation } from '@expo/vector-icons'
import { useQuery } from '@tanstack/react-query'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale/ja'
import { router, useLocalSearchParams } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'

const MemoDetail = () => {
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

  return (
    <View className="flex-1 bg-white">
      <View className="bg-blue-500 h-24 justify-center py-6 px-[19px]">
        <View className="flex-1 gap-2  mr-2">
          <Text className="text-white text-xl leading-8 font-bold truncate">
            {data.content}
          </Text>

          <Text className="text-white text-xs">
            {format(data.updatedAt.toDate(), 'yyyy年MM月dd日 HH:mm', {
              locale: ja,
            })}
          </Text>
        </View>
      </View>

      <ScrollView className="py-8 px-7">
        <Text className="text-base">{data.content}</Text>
      </ScrollView>

      <View className="flex-1 items-end justify-end">
        <CircleButton
          icon={<Foundation name="pencil" size={25} color={'white'} />}
          onPress={() => router.push(`memo/edit/${data.id}`)}
        />
      </View>
    </View>
  )
}

export default MemoDetail
