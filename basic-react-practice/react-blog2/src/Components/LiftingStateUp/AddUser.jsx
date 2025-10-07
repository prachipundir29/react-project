
function AddUser({setUser}){
 
    return(
        <>
        <div style={{marginLeft:"40px"}}>
        <h1>Add User</h1>
        <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="Enter Username" />
        </div>
        </>
    )
}

export default AddUser