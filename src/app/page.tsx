"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CustomNavbarWrapper from '../components/Navbar'; // Import Navbar
import MyCustomCarousel from '../components/Carousel'; // Import Carousel
import ProgramCard from '../components/ProgramCard'; // Import renamed Card component
import Login from '../login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from '../login/Register';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CustomNavbarWrapper />
        <MyCustomCarousel />
        <ProgramCard />
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          
          {/* अन्य रूट्स */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
