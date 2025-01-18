import { AuthSchemaType } from '@/features/auth/types/schema/auth-schema'
import { authSchema } from '@/features/auth/types/schema/auth-schema'
import { useSafeForm } from '@/hooks/use-safe-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'expo-router'
import React from 'react'
import { Controller } from 'react-hook-form'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

type AuthFormProps = Record<
  'title' | 'navigationText' | 'navigationLink',
  string
> & {
  onPress: (data: AuthSchemaType) => void
}

export const AuthForm = ({
  title,
  navigationText,
  navigationLink,
  onPress,
}: AuthFormProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useSafeForm<AuthSchemaType>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = handleSubmit((data) => {
    onPress(data)
  })

  return (
    <View className="px-7 py-6 flex-col gap-4">
      <Text className="text-2xl font-bold">{title}</Text>

      <View>
        <Controller
          name="email"
          control={control}
          disabled={isSubmitting}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Email Address"
              className="border border-gray-300 bg-white h-12 p-2 text-base rounded-md"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.email?.message && (
          <Text className="text-red-500 text-sm">{errors.email.message}</Text>
        )}
      </View>

      <View>
        <Controller
          name="password"
          control={control}
          disabled={isSubmitting}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Password"
              className="border border-gray-300 bg-white h-12 p-2 text-base rounded-md"
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
              secureTextEntry={true}
              textContentType="password"
            />
          )}
        />

        {errors.password?.message && (
          <Text className="text-red-500 text-sm">
            {errors.password.message}
          </Text>
        )}
      </View>

      <TouchableOpacity
        onPress={onSubmit}
        disabled={isSubmitting}
        className="bg-blue-500 rounded-md self-start"
      >
        <Text className="text-base text-white px-6 py-2">Submit</Text>
      </TouchableOpacity>

      <View className="flex-row">
        <Text className="text-sm">{navigationText}</Text>
        <Link href={title === 'Log In' ? '/sign-up' : '/login'} asChild={true}>
          <TouchableOpacity disabled={isSubmitting}>
            <Text className="text-sm text-blue-500 ml-2">{navigationLink}</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}
