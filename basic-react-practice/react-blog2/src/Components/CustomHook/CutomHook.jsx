import useToggle from "./useToggle"

export default function CustomHook(){
   const [value, toggleValue] = useToggle(true)
//    console.log('val-----', value);

const [data, setData] = useToggle(true)
   
    return(
        <div>
            <button onClick={toggleValue}>Toggle Button</button>
            <button onClick={()=>toggleValue(false)}>Hide Button</button>
            <button onClick={()=>toggleValue(true)}>Show Button</button>
            {
                value?<h1>Custom Hooks in React Js</h1>:null
            }

            <hr />
            <button onClick={setData}>Toggle Button</button>
            <button onClick={()=>setData(false)}>Hide Button</button>
            <button onClick={()=>setData(true)}>Show Button</button>

            {
                data? <h1>Second Heading</h1> : null
            }
        </div>
    )
}