import { cn } from '@/utils/classes'
import { MaterialIcons } from '@expo/vector-icons'
import { router, usePathname } from 'expo-router'
import { Text, TouchableOpacity, View } from 'react-native'

export const Header = () => {
  const pathname = usePathname()
  const isMemoDetail = pathname === '/memo/detail'

  return (
    <View
      className={cn(
        'bg-blue-500 h-[104px] justify-center items-center pt-10',
        isMemoDetail && 'flex-row justify-between px-4',
      )}
    >
      {isMemoDetail && (
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="white" />
        </TouchableOpacity>
      )}
      <View>
        <Text className="text-2xl font-bold text-white">Memo App</Text>
      </View>
      <View className={isMemoDetail ? '' : 'absolute bottom-7 right-4'}>
        <Text className="text-white opacity-70">ログアウト</Text>
      </View>
    </View>
  )
}
