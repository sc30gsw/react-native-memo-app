import { Stack } from 'expo-router'

import '../../global.css'

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3b82f6',
        },
        headerTintColor: '#fff',
        headerTitle: 'Memo App',
        headerBackTitle: 'Back',
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 'bold',
        },
      }}
    />
  )
}

export default Layout
