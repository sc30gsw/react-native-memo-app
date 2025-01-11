import { cn } from '@/utils/classes'
import { ComponentProps, ReactNode } from 'react'
import { TouchableOpacity, View } from 'react-native'

type CircleButtonProps = {
  icon: ReactNode
  onPress: () => void
  className?: ComponentProps<typeof View>['className']
}

export const CircleButton = ({
  icon,
  onPress,
  className,
}: CircleButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        'size-16 rounded-full bg-blue-500 items-center justify-center absolute bottom-10 right-10 shadow-lg',
        className,
      )}
    >
      {icon}
    </TouchableOpacity>
  )
}
