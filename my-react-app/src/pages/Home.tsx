import React from 'react';
import Navbar from '../components/Navbar';
import Translator from '../components/Translator';

const Home = () => {
  return (
    <div className="flex flex-col items-center p-7 rounded-2xl">
      <Navbar />
      <h1>Bienvenido a mi pagina de inicio</h1>
      <h2>Traductor de idiomas</h2>
      <Translator />
    </div>
  );
};

export default Home;
