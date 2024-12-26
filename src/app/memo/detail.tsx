import { Header } from '@/components/header'
import { CircleButton } from '@/features/memo/components/circle-button'
import { Foundation } from '@expo/vector-icons'
import { ScrollView, Text, View } from 'react-native'

const MemoDetail = () => {
  return (
    <View className="flex-1 bg-white">
      <Header />

      <View className="bg-blue-500 h-24 justify-center py-6 px-[19px]">
        <Text className="text-white text-xl leading-8 font-bold">
          買い物リスト
        </Text>
        <Text className="text-white text-xs">2023年10月1日 10:00</Text>
      </View>

      <ScrollView className="py-8 px-7">
        <Text className="text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          architecto consequuntur, aspernatur recusandae odit facilis expedita
          saepe sequi, magnam alias, accusamus ullam consequatur hic aperiam
          nostrum perspiciatis earum enim. Facilis.
        </Text>
      </ScrollView>

      <CircleButton
        icon={<Foundation name="pencil" size={25} />}
        className="top-40 bottom-auto"
      />
    </View>
  )
}

export default MemoDetail
