import { AuthForm } from '@/features/auth/components/auth-form'
import React from 'react'

const Login = () => {
  return (
    <AuthForm
      title="Log In"
      navigationText="Not registered?"
      navigationLink="Sign up here!"
    />
  )
}

export default Login
