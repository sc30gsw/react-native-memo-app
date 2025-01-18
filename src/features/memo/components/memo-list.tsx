import { Spinner } from '@/components/ui/spinner'
import { MEMO_CACHE_KEY } from '@/constants'
import { MemoListItem } from '@/features/memo/components/memo-list-item'
import { Memo } from '@/features/memo/types/memo'
import { auth } from '@/libs/config'
import { fetcher } from '@/libs/fetcher'
import { useQuery } from '@tanstack/react-query'
import { router } from 'expo-router'
import { orderBy } from 'firebase/firestore'
import { FlatList, Text, View } from 'react-native'

const fetchMemos = async () => {
  if (!auth.currentUser) {
    router.replace('/login')

    return []
  }

  const data = await fetcher<Memo[]>(
    `users/${auth.currentUser.uid}/memos`,
    orderBy('updatedAt', 'desc'),
  )

  return data
}

export const MemoList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: [MEMO_CACHE_KEY],
    queryFn: fetchMemos,
  })

  if (isLoading || !data) {
    return <Spinner />
  }

  if (error) {
    return (
      <View>
        <Text>Something went wrong.</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <MemoListItem memo={item} />}
      />
    </View>
  )
}
