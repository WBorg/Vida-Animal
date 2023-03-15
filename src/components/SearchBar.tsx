import {HStack, Input, Icon, IconButton} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';
import {Alert} from 'react-native'


export function SearchBar(){

  return(
    <HStack h="60px" bg="#10ABD4" w="full"  alignItems="center" justifyContent="center">
      <IconButton 
        variant="ghost" 
        size="lg" 
        borderRadius="full"
        _icon={{
          as: MaterialIcons,
          name: "arrow-back",
          color: "white",
          size: "xl"
        }}
          
        />
      <Input 
        variant="rounded" w="294px" 
        InputLeftElement={<Icon as={<MaterialIcons name="search" color="black" />} 
          size={5} 
          ml={4} 
          color="#ECDBB6"/>} 
        placeholder="Buscar no vida pet" fontSize="14px" 
        placeholderTextColor="#ECDBB6"
        color="gray.700"
        backgroundColor="white"
        h="40px"
      />

      <IconButton 
        variant="ghost" 
        size="lg" 
        borderRadius="full"
        _icon={{
          as: MaterialIcons,
          name: "menu",
          color: "white",
          size: "xl"
        }}
        
          
      />

    </HStack>
  )
}