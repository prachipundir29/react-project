import React, { useRef } from 'react'
import CforwardRef from './CforwardRef';

const PforwardRef = () => {

    const inputRef = useRef(null);

    const handleinput = () => {
      inputRef.current.value = 2000 
      inputRef.current.style.color = "maroon"
      inputRef.current.focus()       
    }
  return (
    <>
        <h1> Forward Ref</h1>
        <CforwardRef ref={inputRef} />
      <button onClick={handleinput}>Forward Ref</button>
    </>
  )
}

export default PforwardRef
