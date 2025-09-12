const User = ({data}) => {
    return(
    <div style={{
            border: "1px solid green",
            padding: "10px",
            margin: "10px",
            width: "400px",
            borderRadius: "10px"
    }}>
        <h2>Name: <span  style={{color: "purple"}}>{data.name}</span></h2>
        <h2>email: <span  style={{color: "green"}}>{data.email}</span></h2>
        <h2>Age: <span  style={{color: "yellow"}}>{data.age}</span></h2>

    </div>
    )
}

export default User;