import { Box, Image, Text, Button, IButtonProps } from 'native-base'
import { Dimensions, ImageSourcePropType } from 'react-native'

type Props = IButtonProps & {
  source: ImageSourcePropType
}

export function CardPet({ source, ...rest }: Props) {

  const screenWidth = Dimensions.get('window').width
  const itemWidth = screenWidth / 3;
  return (
    <Box>
      <Button 
        p={0} 
        variant="ghost"
        _pressed={{
          bg : 'yellow.100:alpha.40'
        }}
        {...rest} 
      >
        <Image
          source={source}
          alt="imagem"
          w={itemWidth}
          h={itemWidth}
          resizeMode="contain"
        />
      </Button>
    </Box>
  )
}
