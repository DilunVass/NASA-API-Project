import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/signin';
import MarsRoverPhotos from '../pages/MarsRoverPhotos';
import PicOfDay from '../pages/PicOfDay';
import Astroids from '../pages/AstroidsPage';
import Discover from '../pages/Discover';

export default function RoutesNav() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/discover' element={<Discover/>}/>
      <Route path='/picofday' element={<PicOfDay/>}/>
      <Route path='/marsroverphotos' element={<MarsRoverPhotos/>}/>
      <Route path='/astroids' element={<Astroids/>}/>
  
    </Routes>
    </BrowserRouter>
    
  );
};


