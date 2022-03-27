import React from 'react';
import { Button } from './ButtonList';

export const SwapUI = () => {
  return(
    <div className="swap">
        <div className="row border">
          <div>
            <Button 
              type="source"/></div>
          <div>
            <Button 
              type="destination"/></div>
        </div>
        <div className="row border">
          <div><Button /></div>
          <div><input /></div>
        </div>
        <div className="row">
          <button>Post</button>
        </div>
    </div>
  );
};
