import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router'
const Router = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/address">Address</Link>
        <Routes>
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/contact' element={<h1>Contact</h1>} />
            <Route path='/address' element={<h1>Address</h1>} />
        </Routes>
    </div>
  )
}

export default Router
