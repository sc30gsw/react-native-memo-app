import { db } from '@/libs/config'
import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'

type QueryArgs = Parameters<typeof query>

export const fetcher = async <T>(
  path: string,
  queries?: QueryArgs[1],
  docId?: string,
): Promise<T | null> => {
  if (docId) {
    const ref = doc(db, path, docId)
    const snapshot = await getDoc(ref)

    if (snapshot.exists()) {
      const res = snapshot.data() as T

      return res
    }

    return null
  }

  const ref = collection(db, path)
  const q = queries ? query(ref, queries) : ref

  const res = await getDocs(q)

  const docs = res.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as T

  return docs
}
