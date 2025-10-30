import React, { useId } from 'react'

const UseId = () => {
   
  return (
    <>
     <UserForm />
     <hr />
     <UserForm />
    </>
  )
}

const UserForm = () => {
    const user = useId();
    // const password = useId();
    // const email = useId();
    // const terms = useId();
  return (
    <>
     <form action="">
        <label htmlFor={user+"name"}>Enter Username</label>
        <input type="text" id={user+"name"}  placeholder='enter username'/>
        <br /><br />
        <label htmlFor={user+"password"}>Enter Password</label>
        <input type="password" id={user+"password"}  placeholder='enter password'/>
        <br /><br />
        <label htmlFor={user+"email"}>Enter Email</label>
        <input type="email" id={user+"email"}  placeholder='enter email'/>
        <br /><br />
        <input type="checkbox" id={user+"terms"} />
        <label htmlFor={user+"terms"}>Accept Terms and Conditions</label>
     </form>
    </>
  )
}
export default UseId
