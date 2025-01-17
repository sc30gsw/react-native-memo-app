import { auth } from '@/libs/config'
import { Redirect, router } from 'expo-router'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { View } from 'react-native'

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
    return (
      <View className="flex items-center my-4">
        <View className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent" />
      </View>
    )
  }

  return <Redirect href={'/login'} />
}

export default Home
