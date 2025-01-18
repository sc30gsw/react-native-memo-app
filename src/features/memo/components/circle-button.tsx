import { cn } from '@/utils/classes'
import { ComponentProps, ReactNode } from 'react'
import { TouchableOpacity, View } from 'react-native'

type CircleButtonProps = {
  icon: ReactNode
  onPress: () => void
  disabled?: boolean
  className?: ComponentProps<typeof View>['className']
}

export const CircleButton = ({
  icon,
  onPress,
  disabled,
  className,
}: CircleButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={cn(
        'size-16 rounded-full bg-blue-500 items-center justify-center absolute bottom-10 right-10 shadow-lg',
        className,
        disabled && 'bg-neutral-300',
      )}
    >
      {icon}
    </TouchableOpacity>
  )
}
