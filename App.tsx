import { NativeBaseProvider, Box } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'

import { MeuPet } from './src/pages/MeuPet'

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#F3EAD5">
        <SafeAreaView>
          <MeuPet />
        </SafeAreaView>
      </Box>
    </NativeBaseProvider>
  )
}
