import React from 'react'

const ChildComponent = ({displayName,name, getUser}) => {
  return (
    <>
      <button onClick={()=> displayName(name)}>Display Name</button>
      <button onClick={ getUser}>Get User</button>
    </>
  )
}

export default ChildComponent
