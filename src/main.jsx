import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Team from './Pages/Team';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/aboutUs" element={<AboutUs/>}> </Route>
        <Route path="/team" element={<Team/>}> </Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
