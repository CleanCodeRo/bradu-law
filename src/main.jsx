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
import WappComponent from './Components/WappComponent';

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
        
        

      </Routes>
      <WappComponent/>
    <Footer/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
