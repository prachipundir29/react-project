import React from 'react';
import { Route, Routes, Link } from 'react-router';
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';

const Pages = () => {
  return (
    <>
  
       <Navbar />
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />


       </Routes>
    </>
  )
}

export default Pages
