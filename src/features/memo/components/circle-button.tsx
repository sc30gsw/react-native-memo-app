import { cn } from '@/utils/classes'
import { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'

type CircleButtonProps = {
  icon: ReactNode
  onPress: () => void
  disabled?: boolean
}

export const CircleButton = ({
  icon,
  onPress,
  disabled,
}: CircleButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={cn(
        'size-16 rounded-full bg-blue-500 items-center justify-center shadow-lg mb-10 mr-10',
        disabled && 'bg-neutral-300',
      )}
    >
      {icon}
    </TouchableOpacity>
  )
}
