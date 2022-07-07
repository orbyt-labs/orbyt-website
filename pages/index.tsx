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
        <meta name='description' content='crypto wallet' />
        <meta name='description' content='android crypto wallet' />
        <meta name='description' content='ios crypto wallet' />
      </Head>
      <Main />
    </>
  );
};

export default Home;
