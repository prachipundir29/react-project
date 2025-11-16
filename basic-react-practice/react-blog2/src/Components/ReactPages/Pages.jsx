import React from 'react';
import { Route, Routes, Link } from 'react-router';
import Home from './Home';
import About from './About';
import Login from './Login';
import Navbar from './Navbar';
import Page404 from './Page404';
import College from './College';
import Student from './Student';
import Department from './Department';
import Details from './Details';
import UserList from './UserList';
import UserDetails from './UserDetails';

const Pages = () => {
  return (
    <>
  
       {/* <Navbar /> */}
      <Routes> 
        <Route element={<Navbar />}>
        <Route path='/' element={<Home />} />
        <Route path='/users/list?' element={<UserList/>}/>
        <Route path='/users/:id/:name?' element={<UserDetails/>}/>


        <Route path='user'>
        <Route path='/user/login' element={<Login />} />
        <Route path='/user/about' element={<About />} />
        </Route>
        </Route>
        
        <Route path='/college' element={<College />}>
        <Route index element={<Student/>}/>
        <Route path='department' element={<Department/>}/>
        <Route path='details' element={<Details/>}/>
        </Route>

        <Route path='/*' element={<Page404/>} />



       </Routes>
    </>
  )
}

export default Pages
