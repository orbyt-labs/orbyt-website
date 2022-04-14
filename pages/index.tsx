import React from 'react';
import type { NextPage } from 'next';
import { Main, Footer,Explainer } from '../components';
import { Box } from '@chakra-ui/react';
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box
        maxW={['100vw', '100vw', '100vw']}
        overflow={['100vw', '100vw', '100vw']}
        cursor='pointer'>
        <Main />
        <Explainer />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
