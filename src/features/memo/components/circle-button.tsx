import { cn } from '@/utils/classes'
import { ComponentProps } from 'react'
import { Text, View } from 'react-native'

type CircleButtonProps = {
  icon: string
  className?: ComponentProps<typeof View>['className']
}

export const CircleButton = ({ icon, className }: CircleButtonProps) => {
  return (
    <View
      className={cn(
        'size-16 rounded-full bg-blue-500 items-center justify-center absolute bottom-10 right-10 shadow-lg',
        className,
      )}
    >
      <Text className="text-white text-4xl">{icon}</Text>
    </View>
  )
}
