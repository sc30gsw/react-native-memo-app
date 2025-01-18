import { AuthForm } from '@/features/auth/components/auth-form'
import { auth } from '@/libs/config'
import { router } from 'expo-router'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { Alert } from 'react-native'

const SignUp = () => {
  return (
    <AuthForm
      title="Sign Up"
      navigationText="Already registered?"
      navigationLink="Log In"
      onPress={(data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then(() => {
            router.replace('/memo/list')
          })
          .catch((err: unknown) => {
            if (err instanceof Error) {
              return Alert.alert(
                'Email already in use. \n Please use a different email.',
              )
            }

            Alert.alert('Something went wrong')
          })
      }}
    />
  )
}

export default SignUp
