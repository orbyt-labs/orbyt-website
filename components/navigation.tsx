import { Box, Heading} from '@chakra-ui/react';
import Logo from '../public/assets/images/logo.png';
import Image from 'next/image';
import { FaDiscord, FaGithub } from 'react-icons/fa';
import Router from 'next/router';

export const Navigation = (): JSX.Element => {
  const router = Router;
  const goTo = (link: string) => {
    window.open(link, '_blank');
  }

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
            alt={'orbtyt labs logo'}
            src={Logo}
            width={30}
            height={30}/>
          <Box
            display={['none', 'none', 'flex', 'flex']}
            flexDirection='row'
            >
          </Box>
        </Box>
        <Box
          display={['none', 'none', 'flex', 'flexs']}
          flexDirection='row'
          justifyContent='center'
          alignItems='center'>
            <Box
              margin={4}
              onClick={() => goTo("https://discord.gg/7xz8JUg66P")}>
              <FaDiscord
                fontSize={35}
                color='white' />
            </Box>
            <Box
              margin={4}
              onClick={() => goTo("https://github.com/orbyt-labs")} >
              <FaGithub
                fontSize={35}
                color='white' />
            </Box>
            <Box
              display='none'>
            </Box>
        </Box>
      </Box>
  );
}

export default Navigation;
