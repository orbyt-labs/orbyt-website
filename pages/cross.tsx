import React from 'react';
import type { NextPage } from 'next';
import { Phone, Main, Navigation, Footer, Info } from '../components';
import { Box } from '@chakra-ui/react';

const Cross: NextPage = () => {
  return (
    <Box
      cursor='pointer'>
        <Navigation />
        <Main />
        <Info />
        <Footer />
    </Box>
  );
};

export default Cross;
