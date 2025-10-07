import React from 'react'
import { useState } from "react"
import AddUser from './AddUser'
import DisplayUser from './DisplayUser'

const LiftingState = () => {
   const [user, setUser] = useState("")
  return (
    <>
      <AddUser setUser={setUser} />
      <DisplayUser user={user} />
    </>
  )
}

export default LiftingState
