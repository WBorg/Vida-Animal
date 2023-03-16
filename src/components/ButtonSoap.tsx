import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string
  type?: 'confirm' | 'cancel'
}

export function ButtonSoap({ title, type = 'confirm', ...rest }: Props) {
  return (
    <NativeBaseButton
      w="92px"
      h="42px"
      bg={type === 'confirm' ? '#10ABD4:alpha.25' : '#FF7700:alpha.25'}
      
      
      rounded="xl"
      _pressed={{
        bg: type === 'confirm' ? '#10ABD4:alpha.40' : '#FF7700:alpha.40'
      }}
      {...rest}
    >
      <Text
        color={type === 'confirm' ? '#10ABD4' : '#FF7700'}
        
        fontSize="16px"
      >
        {title}
      </Text>
    </NativeBaseButton>
  )
}
