import { AuthForm } from '@/features/auth/components/auth-form'
import React from 'react'
import { Alert } from 'react-native'

const SignUp = () => {
  return (
    <AuthForm
      title="Sign Up"
      navigationText="Already registered?"
      navigationLink="Log In"
      onPress={() => Alert.alert('Sign Up Pressed')}
    />
  )
}

export default SignUp
