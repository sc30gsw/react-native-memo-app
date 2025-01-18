import { Memo } from '@/features/memo/types/memo'
import { auth } from '@/libs/config'
import { fetcher } from '@/libs/fetcher'
import { router } from 'expo-router'

export const fetchMemo = async (memoId: string) => {
  if (!auth.currentUser) {
    router.replace('/login')

    return
  }

  const memo = await fetcher<Memo>(
    `users/${auth.currentUser.uid}/memos`,
    undefined,
    memoId,
  )

  if (!memo) {
    router.back()

    return
  }

  return memo
}
