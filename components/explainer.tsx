import { Box, Text, Heading } from '@chakra-ui/react';

export const Explainer = (): JSX.Element => {
  return (
      <Box
        className='gradient'
        display={'flex'}
        padding={10}
        flexDirection='row'
        justifyContent='center'
        flexWrap={'wrap'}>
        <Box
          className='glass'
          margin={5}
          maxWidth={'400px'}
          minWidth={'400px'}>
          <Heading>Secure</Heading>
          <Text
            fontWeight='bold'>
              We don't own or store your private keys. you don't require any KYC to use the app.
          </Text>
        </Box>  
        <Box
          className='glass'
          margin={5}
          maxWidth={'400px'}
          minWidth={'400px'}>
          <Heading>Cheap Transactions</Heading>
          <Text
            fontWeight='bold'>Near-zero fees: transfer digital currencies around the world at a click of a button</Text>
        </Box>
        <Box
          className='glass'
          margin={5}
          maxWidth={'400px'}
          minWidth={'400px'}>
          <Heading>Open Source</Heading>
          <Text
            fontWeight='bold'>We don't own or store your private keys. you don't require any KYC to use the app.</Text>
        </Box>
      </Box>
  )
};