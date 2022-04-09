import React from 'react';
import type { NextPage } from 'next';
import { Phone, Main, Navigation, Footer, Info } from '../components';
import { Box, Heading, Text, } from '@chakra-ui/react';

const Error: NextPage = () => {
  return (
    <Box
        display='flex'
        justifyContent='center'
        height='100vh'
        bg={'#333333'}
        alignItems='center'>
        <Heading
            maxWidth='800px'
            fontSize={'60px'}>
              Error
        </Heading>
    </Box>
  );
};

export default Error;
