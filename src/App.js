import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginForm from './Client-side/SignInPage';
import SignUp from './Client-side/RegisterPage';
import Navbar from './Client-side/Navbar';

const App = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<SignUp />} />
            <Route path="login" element={<LoginForm />} />
          </Route>
       </Routes>
    </BrowserRouter>
  );
};

export default App;


