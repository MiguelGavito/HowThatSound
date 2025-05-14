import React from 'react';
import Navbar from '../components/Navbar';
import Translator from '../components/Translator';
import GoogleT from '../components/GoogleT';
import { DisposicionTienda } from '../components/DisposicionTienda';
const Home = () => {
  return (
    <div className="flex flex-col  items-center rounded-2x1">
      <DisposicionTienda />
    </div>
  );
};

export default Home;
