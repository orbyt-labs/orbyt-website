import { Box, Image } from '@chakra-ui/react';
import { Web3Button } from './web3button';
import Logo from './../assets/logo.png'

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
        alignItems='center'
        justifyContent='space-between'>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          justifyContent='space-between'>
        </Box>
        <Box>
          <Web3Button />
        </Box>
      </Box>
  );
}

export default Navigation;
