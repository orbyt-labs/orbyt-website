import React from 'react';
import type { NextPage } from 'next';
import { Main } from '../components';
import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head'
import { appIcons as AppIcon } from '../components/appIcon';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='a simple wallet to send and recieve crypto' />
      </Head>
      <Main />
    </>
  );
};

export default Home;
