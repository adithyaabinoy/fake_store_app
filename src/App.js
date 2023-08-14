import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import About from "./pages/About";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
