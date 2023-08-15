import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import ProductDetails from "./pages/ProductDetails";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/products/1" element={<ProductDetails/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
