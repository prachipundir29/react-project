import React, { useTransition } from 'react'

const UseTransitionHook = () => {
    
    const[pending, startTransition] = useTransition()

   const handdleButton = () => {
       startTransition(async()=> {
        await new Promise(res => setTimeout(res, 5000))

       })   
     }
  return (
    <>
      <h1>UseTransition Hook in React Js</h1>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      { 
        pending? 
        <img style={{width: "100px"}} src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-11-849_512.gif" alt="" />:
        null
      }
      <button style={{alignItems:"center", margin: "30px"}} disabled={pending} onClick={handdleButton}>Click me</button>
      </div>
    </>
  )
}

export default UseTransitionHook
