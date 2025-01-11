import { AuthForm } from '@/features/auth/components/auth-form'
import { router } from 'expo-router'
import React from 'react'

const Login = () => {
  return (
    <AuthForm
      title="Log In"
      navigationText="Not registered?"
      navigationLink="Sign up here!"
      onPress={() => {
        // TODO: login
        router.push('/memo/list')
      }}
    />
  )
}

export default Login
