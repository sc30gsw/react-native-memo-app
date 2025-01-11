import { AuthForm } from '@/features/auth/components/auth-form'
import { router } from 'expo-router'
import React from 'react'

const SignUp = () => {
  return (
    <AuthForm
      title="Sign Up"
      navigationText="Already registered?"
      navigationLink="Log In"
      onPress={() => {
        // TODO: sign up
        router.replace('/memo/list')
      }}
    />
  )
}

export default SignUp
