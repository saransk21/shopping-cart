import React from 'react'
import Shoping from './pages/Shoping';
import CartItems from './pages/CartItems';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Shoping/>} />
          <Route path="/cart" element={<CartItems/>}/>
        </Routes>
      </BrowserRouter>
      
     
      
    </div>
  )
}

export default App
