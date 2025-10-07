import React, { useActionState } from 'react'

const UseAction = () => {
  const handleSubmit = async(previousData, formData) => {
     let name = formData.get("name");
     let password = formData.get("password"); 

    await new Promise((resolve)=>setTimeout(resolve, 2000) )
    // console.log("handleSubmit Called", name, password);

    if(name&&password){
      return{message: "Form Submitted Successfully", name, password}
    }else{
      return{error: "Please fill all the data", name, password}
    }

    
  }
  const [data, action,pending] = useActionState(handleSubmit, undefined)
  console.log(data);
  
  return (
    <>
      <h1>useAction State Hook in React js</h1>
      <form action={action}>
        <input type="text" defaultValue={data?.name} placeholder='enter username' name='name' />
        <br /> <br />
        <input type="password" defaultValue={data?.password} placeholder='enter password' name='password' />
        <br /> <br />
        <button disabled={pending}>Submit</button>
         <br />
        </form> 

        {
          data?.error && <span style={{color:"red"}}>{data?.error}</span>
        }
        {
          data?.message && <span style={{color:"green"}}>{data?.message}</span>
        }

        <h4>Name: {data?.name}</h4>
        <h4>Password: {data?.password}</h4>
        

    </>
  )
}

export default UseAction

