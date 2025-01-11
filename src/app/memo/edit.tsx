import { CircleButton } from '@/features/memo/components/circle-button'
import { Feather } from '@expo/vector-icons'
import { router } from 'expo-router'
import { KeyboardAvoidingView, Platform, TextInput, View } from 'react-native'

const MemoEdit = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <View className="px-8 py-7 flex-1">
        <TextInput
          value={'買い物\nリスト'}
          multiline={true}
          className="flex-1 text-base align-top"
        />
      </View>
      <View className="items-end px-10">
        <CircleButton
          icon={<Feather name="check" size={40} color={'white'} />}
          onPress={() => router.back()}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default MemoEdit
