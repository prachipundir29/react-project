// import React, { forwardRef } from 'react'

// const CforwardRef = (props, ref) => {
//   return (
//     <>
//       <input type="text"  ref={ref}/>

//     </>
//   )
// }

// export default forwardRef(CforwardRef)

// Forward Ref in React 19

const childInput = (props)=> {
  return(
   <input type="text" ref={props.ref} />
  )
}

export default childInput
