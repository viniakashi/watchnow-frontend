import React from 'react';

import logo from './logo.svg';
import Header from './components/Header';
import Movies from './components/Movies';
import HeaderImg from './assets/img/header.png'
import './App.css';
require('dotenv').config();

function Home() {
  return (
      
    <div className="App">
    
        <Header />
        <div className="headerMobile_bgWatch">
                <img src={HeaderImg} alt="Watch" />
        </div>
        <Movies />
    </div>
  );
}

export default Home;
