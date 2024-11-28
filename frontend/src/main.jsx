import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";
import { Routes, Route } from "react-router";
import Cards from './components/Cards/Cards.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Aboutus from './components/Aboutus/Aboutus.jsx';

import Footer from './components/Footer/Footer.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import FAQ from './components/Faq/FAQ.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/contctus" element={<ContactUs />} />
      <Route path="/faqs" element={<FAQ />} />



      <Route path="/card" element={<Cards />} />

    </Routes>
  </BrowserRouter>,
)
