import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero.jsx';
import Cards from './components/Cards/Cards.jsx';
import AboutMain from './components/AboutMain/AboutMain.jsx';

import { BrowserRouter } from "react-router";

function App() {
  return (
    <>
    <Navbar />
    <Hero/>
    <Cards />
    <AboutMain/>
    <Footer />
    </>
  )
}

export default App