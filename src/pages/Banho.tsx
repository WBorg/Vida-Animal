import { Box, Center, Heading, HStack, Image } from "native-base";
import { Input } from "../components/Input";
import { SearchBar } from "../components/SearchBar";

import Soap from '../assets/soap.png'
import { ButtonSoap } from "../components/ButtonSoap";

export function Banho(){

  return(
    <Center >
      <SearchBar/>

      <Heading 
          fontSize="25px"
          mt="24px"
          mb="46px"
      >
        Agendar Banho e Tosa
      </Heading>

      <Image
         source={Soap}
         defaultSource={Soap}
         alt="Imagem de banho"
         resizeMode="contain"
         h="179px"
         w="179px"
      />
      <Box w="full" px={8}>
      <Input placeholder="Escolha quais os serviços que deseja"/>
      <Input placeholder="Escolha uma data"/>
      <Input placeholder="Horario"/>
      <Input placeholder="Escolha o Local"/>
      <Input placeholder="Adicionar alguma instrução"/>
      <HStack mt="23px" w="full" justifyContent="space-between">
        <ButtonSoap title="Agendar"/>
        <ButtonSoap title="Cancelar" type="cancel"/>
      </HStack>
      </Box>
      
    </Center>
  )
}