import { Input as NativeBaseInput, IInputProps } from 'native-base'

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="white"
      h="45px"
      px={4}
      borderWidth={0}
      fontSize="md"
      color="gray.700"
      rounded="full"
      mb="23px"
      placeholderTextColor="gray.400"
      shadow={4}
      _focus={{
        bg: 'gray.100',
        borderWidth: 1,
        borderColor: '#707070'
      }}
      {...rest}
    />
  )
}
