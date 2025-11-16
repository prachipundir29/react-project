import React from 'react'
import { NavLink,Link,  Outlet } from 'react-router'


const College = () => {
  return (
    <div className='college' style={{textAlign:'center'}}>
      <h1>College Page</h1>
      <Link to='/'><h5>Go Back to Home</h5></Link>
      <NavLink className='link' to=''>Student</NavLink>
      <NavLink className='link' to='department'>Departments</NavLink>
      <NavLink className='link' to='details'>Details</NavLink>
      <Outlet />
    </div>
  )
}

export default College
