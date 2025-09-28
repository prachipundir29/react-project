import React, { useState } from "react";
import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "Enter Password";
    inputRef.current.value = "12345";
  };
  const ToggleHandler = () => {
    if (inputRef.current.style.display != "none") {
      inputRef.current.style.display = "none";
    } else {
      inputRef.current.style.display = "inline";
    }
  };

  const h2Ref = useRef(null);

  const h2Handler = () => {
    h2Ref.current.style.color="blue";
    h2Ref.current.style.backgroundColor="yellow";
    h2Ref.current.style.padding="10px";
    h2Ref.current.style.width="200px";
    h2Ref.current.style.textAlign="center";
  }

  const [container, setContainer] = useState({
    marginTop: "20px",
    marginBottom: "50px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  });
  return (
    <>
      <h1>UserRef Hook</h1>
      <div style={container}>
        <button onClick={ToggleHandler}>Toggle Button</button>
        <input ref={inputRef} type="text" placeholder="Enter user name" />
        <button onClick={inputHandler}>Focus on input Field</button>
      </div>
      <h2 ref={h2Ref}>Hello React World </h2>
      <button onClick={h2Handler}>Focus on Heading</button>
    </>
  );
};

export default UseRef;
