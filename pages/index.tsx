import React from 'react';
import type { NextPage } from 'next';
import { Phone, Main, Footer, Info } from '../components';
import { Box } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box
      maxW='100vw'
      overflow={'hidden'}  
        cursor='pointer'>
        <Main />
        <Footer />
    </Box>
  );
};

export default Home;
