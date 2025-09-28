import React, { useState } from 'react'

const ProfileCard = () => {
   const [cardStyle, setCardStyle] = useState(
      {
        border: "2px solid #ccc",
        boxShadow: "1px 4px 2px #695a5a60",
        width: "200px",
        paddingTop: "0",
        margin: "30px"

      }
   )
    const [grid, setGrid] = useState(true)
   const upDateTheme=(bgColor, textColor)=> {
       setCardStyle({...cardStyle, backgroundColor: bgColor, color: textColor})
   }
  return (
    <>
      <h1 style={{color: "red"}}>Profile Card designed with inline CSS</h1>
      <button onClick={()=>upDateTheme('#ccc', 'orange')}>Gray Theme</button>
      <button onClick={()=> upDateTheme('white', 'black')} style={{marginLeft: "10px"}}>Default Theme</button>
      <button onClick={()=> setGrid(!grid)} style={{marginLeft: "10px"}}>Toggle Grid</button>
      <div style={{display: grid?'flex':'block', flexWrap: "wrap"}}>
       
        
         <div style={cardStyle} >
        <img style={{width: "200px"}} src="https://cdn.pixabay.com/photo/2023/09/04/22/53/ai-generated-8233880_1280.jpg" alt="" />
        <h4>Demet Ozdemir</h4>
        <p >An Artist</p>
      </div>
         <div style={cardStyle} >
        <img style={{width: "200px"}} src="https://cdn.pixabay.com/photo/2023/09/04/22/53/ai-generated-8233880_1280.jpg" alt="" />
        <h4>Demet Ozdemir</h4>
        <p >An Artist</p>
      </div>
      </div>
    </>
  )
}

export default ProfileCard

