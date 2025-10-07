import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {

    const displayName = (name) => {
        alert(name)
    }

    const getUser = () => {
        alert("Hey User!")
    }
  return (
    <>
     <h1>24. Call Parent Component Function From Child Component</h1>
     <div style={{display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "40px", marginTop:"20px"}}>
      <ChildComponent displayName={displayName} name="Neha"  getUser = {getUser} />
      <ChildComponent displayName={displayName} name="Raaj"  getUser = {getUser}  />
      <ChildComponent displayName={displayName} name="Smith"  getUser = {getUser}  />
      <ChildComponent displayName={displayName} name="Joe"  getUser = {getUser}  />
      </div>
    </>
  )
}

export default ParentComponent
