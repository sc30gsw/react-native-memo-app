import { auth, db } from '@/libs/config'
import { useMutation } from '@tanstack/react-query'
import { router } from 'expo-router'
import { deleteDoc, doc } from 'firebase/firestore'
import { Alert } from 'react-native'

export const useDeleteMemo = () => {
  const mutation = useMutation<void, Error, Record<'id', string>>({
    mutationFn: async ({ id }) => {
      const memoDoc = doc(db, `users/${auth.currentUser?.uid}/memos`, id)

      Alert.alert('Delete this memo', 'Are you sure?', [
        { text: 'Cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteDoc(memoDoc)
              router.replace('/')
            } catch (err: unknown) {
              if (err instanceof Error) {
                Alert.alert('Failed to delete')
              } else {
                Alert.alert('Something went wrong')
              }
            }
          },
        },
      ])
    },
  })

  return { mutate: mutation.mutate, isPending: mutation.isPending }
}
