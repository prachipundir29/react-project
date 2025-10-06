import React, { useState } from 'react'

const UpdateObject = () => {

    const [data, setData] = useState({
        name : "Rohan",
        age: 24,
        address:{
            city: "Delhi",
            country: "India"
        }
    })
    const handlename= (val) => {
        data.name = val
        setData({...data})
        console.log(data);
        
    }
    const handleCity = (city) => {
        data.address.city = city
        console.log(data);
        setData({...data,address:{...data.address, city}})
        
    }
  return (
    <>
      <input type="text" onChange={(event )=> handlename(event.target.value)} placeholder='update name' />
      <input type="text" onChange={(event )=> handleCity(event.target.value)} placeholder='update city' />
      <h2>Name: {data.name}</h2>
      <h2>Age:{data.age}</h2>
      <h2>City:{data.address.city}</h2>
      <h2>Country:{data.address.country}</h2>
    </>
  )
}

export default UpdateObject
