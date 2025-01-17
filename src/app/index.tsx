import { auth } from '@/libs/config'
import { Redirect, router } from 'expo-router'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/memo/list')
      }
    })
  }, [])

  return <Redirect href={'/login'} />
}

export default Home
