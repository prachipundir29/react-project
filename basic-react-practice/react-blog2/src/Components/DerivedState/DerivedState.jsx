import React, { useState } from 'react'

const DerivedState = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser]  = useState('')

    const handleUsers = () => {
        setUsers([...users,user])
    }
     // Derived State
    const total = users.length;
    const lastUser = users[users.length -1]
    const uniqueUser = [...new Set(users)]
    
  return (
    <>
      <h1>Derived State in React Js</h1>

      <div style={{margin:"40px", alignItems: "center", justifyContent:"space-between"}}>
        <h2>Total User :{total} </h2>
        <h2>Last User : {lastUser}</h2>
        <h2>Unique User : {uniqueUser}</h2>
      <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder='add new user' />
      <button onClick={handleUsers}>Add User</button>

        {
        users.map((item, index) => (
            <h4 key={index}>{item}</h4>
        ))
      }
      </div>

    
    </>
  ) 
}

export default DerivedState
