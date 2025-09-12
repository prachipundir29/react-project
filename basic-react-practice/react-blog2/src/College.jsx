import Student from "./Student";

const College = ({college}) => {
    return(
        <div style={{
            backgroundColor: "#ccc",
            color: "#2c2c2c",
            padding: "20px",
            borderBottom: "2px solid #000",
            margin:"20px",
            borderRadius: "10px"
        }}>
               <h2>Name: {college.name}</h2>
              <ul>
                <li>
                  <h3>City: {college.city}</h3>
                </li>
                 <li>
                  <h3>Website: {college.website}</h3>
                </li>
                <li>
               <Student student={college.student}/>
                </li>
              </ul>
              </div>
    )
}
export default College;