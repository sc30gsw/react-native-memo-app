import { Stack } from 'expo-router'

import { QueryProvider } from '@/components/providers/query-provider'
import '../../global.css'

const Layout = () => {
  return (
    <QueryProvider>
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
    </QueryProvider>
  )
}

export default Layout
