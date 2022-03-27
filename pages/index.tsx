import React from 'react'
import type { NextPage } from 'next'
import { Navigation, SwapUI } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <SwapUI />
      </div>
    </>
  );
};

export default Home
