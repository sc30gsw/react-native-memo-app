import { CircleButton } from '@/features/memo/components/circle-button'
import {
  MemoSchemaType,
  memoSchema,
} from '@/features/memo/types/schema/memo-schema'
import { useSafeForm } from '@/hooks/use-safe-form'
import { auth, db } from '@/libs/config'
import { Feather } from '@expo/vector-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'
import { addDoc, collection } from 'firebase/firestore'
import { Controller } from 'react-hook-form'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native'

const MemoCreate = () => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useSafeForm<MemoSchemaType>({
    resolver: zodResolver(memoSchema),
    defaultValues: {
      content: '',
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (auth.currentUser === null) {
        return router.replace('/login')
      }

      const memoCollection = collection(
        db,
        `users/${auth.currentUser.uid}/memos`,
      )

      await addDoc(memoCollection, { content: data.content })

      router.back()
    } catch (err: unknown) {
      if (err instanceof Error) {
        return Alert.alert(err.message)
      }

      Alert.alert('Something went wrong.')
    }
  })

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <View className="px-8 py-7 flex-1">
        <Controller
          name="content"
          control={control}
          disabled={true}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="your memo here..."
              multiline={true}
              className="flex-1 text-base align-top"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.content?.message && (
          <Text className="text-red-500 text-sm">{errors.content.message}</Text>
        )}
      </View>
      <View className="items-end px-10">
        <CircleButton
          icon={<Feather name="check" size={40} color={'white'} />}
          disabled={isSubmitting}
          onPress={onSubmit}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default MemoCreate
