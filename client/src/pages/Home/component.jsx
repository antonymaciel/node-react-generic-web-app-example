import React from 'react';
import image from '../../assets/DSC_3304.png';
import { Button } from '@mui/material';

const Home = () => {
  return (
    <>
      <div style={{ color: 'red' }}>Hola jajajaj je f3f34f</div>
      <img src={image} alt="Antony Maciel" />
      <Button variant="contained" onClick={() => alert('test')}>Hello World</Button>
      My personal web site.
    </>
  );
};

export default Home;
