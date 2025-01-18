import { CircleButton } from '@/features/memo/components/circle-button'
import { useCreateMemo } from '@/features/memo/hooks/use-create-memo'
import { useUpdateMemo } from '@/features/memo/hooks/use-update-memo'
import { Memo } from '@/features/memo/types/memo'
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

type MemoFormProps = {
  memo?: Memo
}

export const MemoForm = ({ memo }: MemoFormProps) => {
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useSafeForm<MemoSchemaType>({
    resolver: zodResolver(memoSchema),
    defaultValues: {
      content: memo ? memo.content : '',
    },
  })

  const { mutate, isPending } = useCreateMemo()
  const { mutate: updateMutate, isPending: isUpdatePending } = useUpdateMemo()

  const onSubmit = handleSubmit(async (data) => {
    if (auth.currentUser === null) {
      return router.replace('/login')
    }

    if (memo) {
      updateMutate(
        { id: memo.id, content: data.content },
        {
          onSuccess: () => {
            router.back()
          },
        },
      )

      return
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
      <View className="flex-1">
        <Controller
          name="content"
          control={control}
          disabled={isPending || isUpdatePending}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="your memo here..."
              multiline={true}
              autoFocus={true}
              className="flex-1 text-base align-top px-8 py-7 "
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
          disabled={isPending || isUpdatePending}
          onPress={onSubmit}
        />
      </View>
    </KeyboardAvoidingView>
  )
}
