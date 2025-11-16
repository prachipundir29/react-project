import React from 'react'
import { Link } from 'react-router'

const UserList = () => {
    const userData = [
        {id:1, name:'Alice'},
        {id:2, name:'Bob'},
        {id:3, name:'Joe'},
        {id:4, name:'Peter'},
        {id:5, name:'Bruce'},
        {id:6, name:'David'},
        {id:7, name:'Sam'},

        
    ]
  return (
    <div>
      <h1>User List Page</h1>
      {
        userData.map((item)=>(
            <div>
                <h5><Link to={'/users/' + item.id}>{item.name}</Link></h5>
          </div>
        ))
      }

           <h1>User List with Name in URL</h1>
      {
        userData.map((item)=>(
            <div>
                <h5><Link to={'/users/' + item.id +"/"+item.name}>{item.name}</Link></h5>
          </div>
        ))
      }
    </div>
  )
}

export default UserList
