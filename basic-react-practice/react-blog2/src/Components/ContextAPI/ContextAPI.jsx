import React, { useState } from 'react'
import College from './College.jsx'
import { SubjectContext } from './ContextData.jsx'


const ContextAPI = () => {
  const [subject, setSubject] = useState('Grammer')
  return (
    <div style={{backgroundColor: "Yellow", padding:"10px"}}>
     <SubjectContext.Provider value={subject}>
      <select Value={subject} onChange={(event) => setSubject(event.target.value)}>
        <option value="">Select Subject </option>
        <option value="Physics">Physics</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Mathematics">Mathematics</option>
      </select>
      <h1>Context API </h1>
      <button onClick={()=> setSubject('')}>Clear Subject</button>
      <College />
     </SubjectContext.Provider>
    
    </div>
  )
}

export default ContextAPI
