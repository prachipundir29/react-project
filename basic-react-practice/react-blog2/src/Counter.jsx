import { useEffect } from "react";

function Counter({count, basicData}){
 
    useEffect(() => {
          console.log("mounting phase only");
          
    },[])

    useEffect(() => {
          console.log("update phase only");
          
    },[count])
    useEffect(() => {
       return () => {
        console.log("unmount phase only");
       }
        
    },[])

   return(
    <div>
        <h1>Counter Value : {count}</h1>
        <h1>BasicData Value: {basicData}</h1>
    </div>
   )
}

export default Counter;