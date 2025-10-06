import React, { useState } from 'react'

const UpdateArray = () => {
    const [data, setData] = useState(["Riya", "Kavya", "Ankita"])

    const handleUser = (name) => {
     data[data.length -1] = name
     console.log(data);
     setData([...data])
    }

    const [dataDetails, setDataDetails] = useState([
        { name: "Riya", age: 22, email: "riya@1243"},{ name: "Kavya", age: 23, email: "kavya@1243" },
        { name: "Ankita", age: 21, email: "ankita@1243" }
    ])

    const handleAge = (age)=> {
        dataDetails[dataDetails.length -1].age = age
        setDataDetails([...dataDetails])
       console.log(age);
       
    }
  return (
    <>
      <h1>Updating Array in React</h1>
      <input type="text" placeholder='update usename'
      onChange={(e)=>handleUser(e.target.value)} />
      {
        data.map((item, index) => (
            <h4 key={index}>{item}</h4>
        ))
      }
      <hr />
      <input type="text" placeholder='update user age'
      onChange={(e)=>handleAge(e.target.value)} />
      {
        dataDetails.map((item, index)=>(
            <h4 key={index}>{item.name},{item.age},{item.email}</h4>
        ))
      }
    </>
  )
}

export default UpdateArray
