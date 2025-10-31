import { useState } from "react";

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(val){
     if(typeof val != "boolean"){
      console.log("if");
      
        setValue(!value)
     }else{
      console.log("else");
      
        setValue(val)
     }
  }
  return [value, toggleValue];
}

export default useToggle

