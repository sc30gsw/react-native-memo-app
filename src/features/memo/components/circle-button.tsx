import { cn } from '@/utils/classes'
import { ComponentProps, ReactNode } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type CircleButtonProps = {
  icon: ReactNode
  className?: ComponentProps<typeof View>['className']
}

export const CircleButton = ({ icon, className }: CircleButtonProps) => {
  return (
    <TouchableOpacity
      className={cn(
        'size-16 rounded-full bg-blue-500 items-center justify-center absolute bottom-10 right-10 shadow-lg',
        className,
      )}
    >
      <Text className="text-white text-6xl">{icon}</Text>
    </TouchableOpacity>
  )
}
