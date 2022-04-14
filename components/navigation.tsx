import { Box, Text} from '@chakra-ui/react';
import { Web3Button } from './web3button';
import Logo from '../public/logo.png';
import Image from 'next/image';


export const Navigation = () => {
  return (
      <Box
        display='flex'
        flexDirection='row'
        height='80px'
        padding='20px'
        position='fixed'
        cursor='pointer'
        background='black'
        width='100vw'
        top='0%'
        zIndex={999999}
        alignItems='center'
        justifyContent='space-between'>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'>
          <Image 
            src={Logo}
            width={30}
            height={30}/>
          <Text 
            marginLeft={5}
            color='white'
            fontWeight='bold'>ORBYT</Text>
        </Box>
        <Box
          display={'none'}>
          <Web3Button />
        </Box>
      </Box>
  );
}

export default Navigation;
