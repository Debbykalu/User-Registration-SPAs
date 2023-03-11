import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Client-side/Home';
import Services from './Client-side/Services';
import AboutUs from './Client-side/AboutUs';
import ContactUs from './Client-side/ContactUs';
import SignUp from './Client-side/SignUp';
import SignIn from './Client-side/SignIn';
import Navbar from './Client-side/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


