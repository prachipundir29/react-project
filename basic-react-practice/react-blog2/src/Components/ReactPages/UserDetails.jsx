import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router';

const UserDetails = () => {
    const paramsData = useParams();
    console.log(paramsData.id);
    
  return (
    <div>
      <h1>User Details Page</h1>
      <h2>User id is :{paramsData.id}</h2>
      <Link to={'/users'}><h5>Back</h5></Link>
    </div>
  )
}

export default UserDetails
