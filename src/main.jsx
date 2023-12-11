import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home';
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
