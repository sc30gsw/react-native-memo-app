import { AuthForm } from '@/features/auth/components/auth-form'
import React from 'react'

const SignUp = () => {
  return (
    <AuthForm
      title="Sign Up"
      navigationText="Already registered?"
      navigationLink="Log In"
    />
  )
}

export default SignUp
