import React from 'react'
import styled from 'styled-components'

const StyledComponent = () => {

    // const Heading = styled.h2`
    // color: purple;
    // border: solid 2px green;
    // text-align: center;
    // padding: 10px;

    // `
    const Heading = styled.h2({
       color: "maroon" ,
       padding: "10px",
       textAlign: "center",
       border: "solid 2px green"
    })
  return (
    <>
      <h1>Styled Component with React Js</h1>
      <Heading>Hello Heading1</Heading>
      <Heading>Hello Heading2</Heading>
      <Heading>Hello Heading3</Heading>
      <Heading>Hello Heading4</Heading>

    </>
  )
}

export default StyledComponent
                                                                                                                                                     