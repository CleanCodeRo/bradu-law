import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home';
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <div>hello</div>
      <Routes>
        <Route path="/home" element={<Home/>}> </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
