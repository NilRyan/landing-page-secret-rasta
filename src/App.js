import React from 'react';
import { FcAndroidOs } from 'react-icons/fc';
import {
  ChakraProvider,
  Flex,
  Text,
  Button,
  useDisclosure,
  Slide
} from '@chakra-ui/react';
import '@fontsource/mountains-of-christmas/400.css'
import '@fontsource/mountains-of-christmas/700.css'
import theme from './theme';
import { Image } from '@chakra-ui/react';

function App() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Flex justifyContent={'center'} minH={'100vh'}  backgroundColor={'#f9c1b1'} bgGradient={'linear-gradient(315deg, #f9c1b1 0%, #fb8085 74%)'}>
        <Flex flexDir={'column'} justifyContent={'center'} color={'white'} minWidth={[300, 500, 700]}>
              
      
            <Flex>
              <Image onClick={onToggle} alignSelf={'center'} src="rastaclaus.png" boxSize={['50', '88']}></Image>
              <Text textAlign={'center'} fontWeight={'extrabold'} fontSize={['6xl','8xl']}>          
                  Secret Rasta
                </Text>
              <Image onClick={onToggle}  alignSelf={'center'} src="rastaclaus.png" boxSize={['50', '88']}></Image>
            </Flex>
            <Flex maxWidth={'700px'}>
              <Text mx={'10'} fontWeight={'bold'} fontSize={['lg', '3xl']}>
              The true Christmas spirit is putting others' happiness before our own, and finding you've never known such happiness. Make someone's day, be a Secret Rasta.
              </Text>
            </Flex>
            
            <Button mt='10' _focus={'none'} mx={['5%','30%']} color={'red.600'} rightIcon={<FcAndroidOs />}>
              Download Secret Rasta Now
            </Button>
            <Slide direction='top' in={isOpen} style={{ zIndex: 10 }}>
              <Image src='calapecute.png' />
      
            </Slide>
        
        </Flex>
       
      
      </Flex>
     
    </ChakraProvider>
  );
}

export default App;
