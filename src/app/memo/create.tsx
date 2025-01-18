import { CircleButton } from '@/features/memo/components/circle-button'
import { useCreateMemo } from '@/features/memo/hooks/use-create-memo'
import {
  MemoSchemaType,
  memoSchema,
} from '@/features/memo/types/schema/memo-schema'
import { useSafeForm } from '@/hooks/use-safe-form'
import { auth } from '@/libs/config'
import { Feather } from '@expo/vector-icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'
import { Controller } from 'react-hook-form'
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native'

const MemoCreate = () => {
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useSafeForm<MemoSchemaType>({
    resolver: zodResolver(memoSchema),
    defaultValues: {
      content: '',
    },
  })

  const { mutate, isPending } = useCreateMemo()

  const onSubmit = handleSubmit(async (data) => {
    if (auth.currentUser === null) {
      return router.replace('/login')
    }

    mutate(data, {
      onSuccess: () => {
        reset()
        router.back()
      },
    })
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
          disabled={isPending}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="your memo here..."
              multiline={true}
              autoFocus={true}
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
      <View className="items-end">
        <CircleButton
          icon={<Feather name="check" size={40} color={'white'} />}
          disabled={isPending}
          onPress={onSubmit}
        />
      </View>
    </KeyboardAvoidingView>
  )
}

export default MemoCreate
