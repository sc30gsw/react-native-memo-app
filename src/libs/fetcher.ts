import { db } from '@/libs/config'
import { collection, getDocs, query } from 'firebase/firestore'

type QueryArgs = Parameters<typeof query>

export const fetcher = async <T>(
  path: string,
  queries: QueryArgs[1],
): Promise<T> => {
  const ref = collection(db, path)
  const q = query(ref, queries)

  const res = await getDocs(q)

  const docs = res.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as T

  return docs
}
