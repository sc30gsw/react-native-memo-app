import { MEMO_CACHE_KEY } from '@/constants'
import { MemoSchemaType } from '@/features/memo/types/schema/memo-schema'
import { auth, db } from '@/libs/config'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { Alert } from 'react-native'

export const useCreateMemo = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<void, Error, MemoSchemaType>({
    mutationFn: async ({ content }) => {
      const memoCollection = collection(
        db,
        `users/${auth.currentUser?.uid}/memos`,
      )

      await addDoc(memoCollection, {
        content: content,
        createdAt: Timestamp.fromDate(new Date()),
        updatedAt: Timestamp.fromDate(new Date()),
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [MEMO_CACHE_KEY] })
    },
    onError: (error) => {
      if (error instanceof Error) {
        Alert.alert(error.message)
      } else {
        Alert.alert('Something went wrong')
      }
    },
  })

  return { mutate: mutation.mutate, isPending: mutation.isPending }
}
