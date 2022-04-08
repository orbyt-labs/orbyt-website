import { Box, Heading, Text } from '@chakra-ui/react';
import { appIcons as AppIcon } from './appIcon';

export const Main = () => {
  return (
      <Box
        padding={10}
        paddingTop={40}
        background='black'
        display='flex'
        alignItems='center'
        maxW={'100vw'}
        overflowX={'hidden'}
        justifyContent='center'>
        <Box
          marginBottom='200px'>
          <Heading
            maxWidth='800px'
            fontSize={'60px'}>
              A simple non-custodain wallet to send, recieve and store digital assets.
          </Heading>
          <AppIcon />
          <Text
              marginTop={'30px'}
              marginBottom={'30px'}
              maxWidth={"700px"}>
                Keep your crypto in a secure and accessible wallet. We want to make it easier for users to connect to web3, make it easier for users to off-ramp from crypto, and have the best non-custodial app in Africa!
          </Text>
        </Box> 
        <Box>
        </Box>
      </Box>
  )
};