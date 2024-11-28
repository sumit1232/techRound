import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer'
import Cards from './components/Cards/Cards'
import { BrowserRouter } from "react-router";

function App() {
  return (
    <>
    <Navbar />
    <Cards />
    <Footer />
    </>
  )
}

export default App