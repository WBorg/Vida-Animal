import { Center, Text, Box, HStack, Image, VStack, Heading } from 'native-base'
import { FlatList } from 'native-base'

import { SearchBar } from '../components/SearchBar'
import PictureMyPet from '../assets/profilePet.png'
import Banho from '../assets/banho.png'
import Consultas from '../assets/consultas.png'
import Vacinas from '../assets/vacinas.png'
import Remedios from '../assets/remedios.png'
import Alimentos from '../assets/alimentos.png'
import Notas from '../assets/notas.png'

import { CardPet } from '../components/CardPet'

export function MeuPet() {
  const data = [
    {
      id: '1',
      name: 'Banho',
      picture: Banho
    },
    {
      id: '2',
      name: 'Consultas',
      picture: Consultas
    },
    {
      id: '3',
      name: 'Vacinas',
      picture: Vacinas
    },
    {
      id: '4',
      name: 'Remédios',
      picture: Remedios
    },
    {
      id: '5',
      name: 'Alimentos',
      picture: Alimentos
    },
    {
      id: '6',
      name: 'Notas',
      picture: Notas
    }
  ]
  return (
    <Center>
      <SearchBar />
      <Box w="full" py="12px" borderColor="black" borderBottomWidth={1}>
        <Text fontSize="30px" alignSelf="center">
          Apolo
        </Text>
      </Box>
      <Box mb={9}>
        <HStack alignItems="center" ml={-12} space={8}>
          <Box>
            <Image
              source={PictureMyPet}
              defaultSource={PictureMyPet}
              alt="foto de perfil do pet"
              h="222px"
              w="222px"
            />
          </Box>
          <VStack ml="-14px">
            <Heading mb={2}>Apolo</Heading>
            <Box>
              <Text>Espécie: cão</Text>
              <Text>Raça: Beagle</Text>
              <Text>Sexo: masculino</Text>
              <Text>Idade: 4 meses</Text>
            </Box>
          </VStack>
        </HStack>
      </Box>
      
        <FlatList
        
        data={data}
        keyExtractor={item => item.id}
        numColumns={3}
        renderItem={({ item }) => <CardPet picture={item.picture} />}
      />
      
      
    </Center>
  )
}
