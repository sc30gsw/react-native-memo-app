import { auth } from '@/libs/config'
import { MaterialIcons } from '@expo/vector-icons'
import { Slot, Stack, router, usePathname } from 'expo-router'
import { signOut } from 'firebase/auth'
import { Alert, Text, TouchableOpacity, View } from 'react-native'

const MemoLayout = () => {
  const pathname = usePathname()

  return (
    <View className="flex-1 bg-slate-200">
      <Stack.Screen
        options={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                signOut(auth)
                  .then(() => {
                    router.replace('/login')
                  })
                  .catch(() => {
                    Alert.alert('Fail to logout')
                  })
              }}
            >
              <Text className="text-white opacity-70">ログアウト</Text>
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          headerLeft: (props) =>
            pathname !== '/memo/list' && (
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row"
              >
                <MaterialIcons
                  name="arrow-back-ios"
                  size={24}
                  color={'white'}
                />
                <Text className="text-white text-xl">{props.label}</Text>
              </TouchableOpacity>
            ),
        }}
      />
      <Slot />
    </View>
  )
}

export default MemoLayout
