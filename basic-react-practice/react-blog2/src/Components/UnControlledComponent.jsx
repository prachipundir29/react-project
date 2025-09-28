import React, { useRef } from 'react'

const UnControlledComponent = () => {

  const  handleForm = (event) => {
       event.preventDefault()
       const user = document.querySelector('#user').value;
       const password = document.querySelector('#password').value;

       console.log(user,password);
       
    }

    const userRef = useRef(null);
    const passwordRef = useRef(null);

    const handleFormRef = (event)=>{
      event.preventDefault()
      const user = userRef.current.value
      const password = passwordRef.current.value
      console.log("handleFormRe",user,password);
      
    }

  return (
    <>
      <h1>UnControlled Component</h1>
      <form action="" method='post' onSubmit={handleForm}>
        <input type="text" id='user'  placeholder='Enter UserName'/>
        <br /><br />
        <input type="password" id='password' placeholder='Enter Password'/>
        <br /><br />
        <button>Submit</button>
      </form>
 
      <hr />
        <h1>UnControlled Component with useRef</h1>
      <form action="" method='post' onSubmit={handleFormRef}>
        <input type="text" ref={userRef} id='userRef'  placeholder='Enter UserName'/>
        <br /><br />
        <input type="password" ref={passwordRef} id='passwordRef' placeholder='Enter Password'/>
        <br /><br />
        <button>Submit with Ref</button>
      </form>

      
    </>
  )
}

export default UnControlledComponent
