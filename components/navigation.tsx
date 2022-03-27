import React from 'react';
import { Web3Button } from './web3button';

export const Navigation = () => {
  return(
      <nav className="header">
        <div 
          className='p-2'>
          <h1>cross chain</h1>
        </div>
        <div  className='p-2'>
          <Web3Button />
        </div>
      </nav>
  );
};
