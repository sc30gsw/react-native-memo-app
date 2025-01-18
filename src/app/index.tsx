import { Spinner } from '@/components/ui/spinner'
import { auth } from '@/libs/config'
import { Redirect, router } from 'expo-router'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

const Home = () => {
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/memo/list')
      }
      setIsPending(false)
    })
  }, [])

  if (isPending) {
    return <Spinner />
  }

  return <Redirect href={'/login'} />
}

export default Home
