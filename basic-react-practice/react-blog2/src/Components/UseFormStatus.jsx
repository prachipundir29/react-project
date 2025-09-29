import React from 'react'
import {useFormStatus, UseFormStatus} from 'react-dom'

const UseFormStatusHook = () => {
    
    const handleSubmit = async() => {
     await new Promise(res => setTimeout(res, 2000));
      console.log("Submit");
      
       
    }

    function CustomerForm(){
        const {pending} = useFormStatus()
        console.log(pending);
        
       return(
        <div>
        <input type="text" placeholder='Enter Username' />
        <br /><br />
        <input type="password" placeholder='Enter password' />
        <br /><br />
        <button disabled={pending}  style={{marginBottom:"40px"}}>{pending?'Submitting...':'submit'}</button>
        </div>
       )
    }

  return ( 
    <>
      <h1>useForm Status Hook in React Js</h1>
        <form action={handleSubmit}>
            <CustomerForm />
        </form>
    </>
  )
}

export default UseFormStatusHook
