import { MEMO_CACHE_KEY } from '@/constants'
import { MemoSchemaType } from '@/features/memo/types/schema/memo-schema'
import { auth, db } from '@/libs/config'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Timestamp, doc, setDoc } from 'firebase/firestore'
import { Alert } from 'react-native'

type ReqType = MemoSchemaType & Record<'id', string>

export const useUpdateMemo = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation<void, Error, ReqType>({
    mutationFn: async ({ id, content }) => {
      const memoDoc = doc(db, `users/${auth.currentUser?.uid}/memos`, id)

      setDoc(memoDoc, {
        content,
        updatedAt: Timestamp.fromDate(new Date()),
      })
    },
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: [`${MEMO_CACHE_KEY}/${id}`] })
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
