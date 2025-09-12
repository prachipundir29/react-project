import { useEffect } from "react";

function Counter({count}){
    function getCounter(){
        console.log("GetCounter Called");
        
    }

    useEffect(() => {
          getCounter();
    },[])

   return(
    <div>
        
        <h1>Counter Value : {count}</h1>
    </div>
   )
}

export default Counter;