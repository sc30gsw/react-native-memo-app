import { Link } from 'expo-router'
import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

type AuthFormProps = Record<
  'title' | 'navigationText' | 'navigationLink',
  string
> & {
  onPress: () => void
}

export const AuthForm = ({
  title,
  navigationText,
  navigationLink,
  onPress,
}: AuthFormProps) => {
  return (
    <View className="px-7 py-6 flex-col gap-4">
      <Text className="text-2xl font-bold">{title}</Text>

      <TextInput
        placeholder="Email Address"
        className="border border-gray-300 bg-white h-12 p-2 text-base rounded-md"
      />
      <TextInput
        placeholder="Password"
        className="border border-gray-300 bg-white h-12 p-2 text-base rounded-md"
      />

      <TouchableOpacity
        onPress={onPress}
        className="bg-blue-500 rounded-md self-start"
      >
        <Text className="text-base text-white px-6 py-2">Submit</Text>
      </TouchableOpacity>

      <View className="flex-row">
        <Text className="text-sm">{navigationText}</Text>
        <Link href={title === 'Log In' ? '/sign-up' : '/login'} asChild={true}>
          <TouchableOpacity>
            <Text className="text-sm text-blue-500 ml-2">{navigationLink}</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}
