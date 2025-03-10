import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Auctions from './Pages/Auctions';
import Articles from './Pages/Articles';
import DueDilligince from './Pages/DueDilligince';
import Insolvency_Bankruptcy from './Pages/Insolvency_Bankruptcy';
import LegalAdvice from './Pages/LegalAdvice';
import Insolventa from './Pages/Insolventa';
import Comercial from './Pages/Comercial';
import WappComponent from './Components/WappComponent';
import Recuperari from './Pages/Recuperari';
import GDPR from './Pages/GDPR';
import LoginPanel from './Pages/LoginPanel';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/aboutUs" element={<AboutUs/>}> </Route>
        <Route path="/team" element={<Team/>}> </Route>
        <Route path="/contact" element={<Contact/>}> </Route>
        <Route path="/auctions" element={<Auctions/>}> </Route>
        <Route path="/articles" element={<Articles/>}> </Route>
        <Route path="/dueDiligence" element={<DueDilligince/>}> </Route>
        <Route path="/insolvencyBankruptcy" element={<Insolvency_Bankruptcy/>}> </Route>
        <Route path="/legalAdvice" element={<LegalAdvice/>}> </Route>
        <Route path="/insolventa" element={<Insolventa/>}> </Route>
        <Route path="/drept-comercial-si-societar" element={<Comercial/>}> </Route>
        <Route path="/recuperari-creante" element={<Recuperari/>}> </Route>
        <Route path="/gdpr" element={<GDPR/>}> </Route>
        <Route path="/login" element={<LoginPanel/>}> </Route>
      </Routes>
      <WappComponent/>
    <Footer/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
