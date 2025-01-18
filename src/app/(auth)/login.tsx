import { AuthForm } from '@/features/auth/components/auth-form'
import { auth } from '@/libs/config'
import { router } from 'expo-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { Alert } from 'react-native'

const Login = () => {
  return (
    <AuthForm
      title="Log In"
      navigationText="Not registered?"
      navigationLink="Sign up here!"
      onPress={(data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
          .then(() => {
            router.replace('/memo/list')
          })
          .catch((err: unknown) => {
            if (err instanceof Error) {
              return Alert.alert(
                'Email or Password is incorrect. \n Please try again.',
              )
            }

            Alert.alert('Something went wrong')
          })
      }}
    />
  )
}

export default Login
