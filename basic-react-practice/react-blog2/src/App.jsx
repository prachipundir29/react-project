import { useEffect, useState } from "react";
// import "./App.css";
import Skills from "./Skills";
import User from "./User";
import Clock from "./Clock";
import College from "./College";
import Counter from "./Counter";

function App() {
  //Input Value
  const [val, setVal] = useState("Siya Ram");

  // Controller Component
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //  Handle Radio and Dropdown
  const [gender, setGender] = useState("female");
  const [city, setCity] = useState("amritsar");

  // Loop in JSX with map function
  const userName = ["Ramya", "Shekhar", "Tanu"];
  const userData = [
    { name: "Ramya", age: 20, email: "ramya@gmail.com", id: 1 },
    { name: "Shekhar", age: 22, email: "shekhar@gmail.com", id: 2 },
    { name: "Tanu", age: 18, email: "tanu@gmail.com", id: 3 },
  ];

  //  Digital Clock in React Js
  const [color, setColor] = useState("orange");

  //  Nested Looping with Component
  const collegeData = [
    {
      name: "IET",
      city: "Alwar",
      website: "www.iet.com",
      student: [
        {
          name: "Prachi",
          age: 22,
          email: "prachi@email.com",
        },
        {
          name: "Rohan",
          age: 24,
          email: "rohan@email.com",
        },
        {
          name: "Deepika",
          age: 20,
          email: "deep@email.com",
        },
      ],
    },
    {
      name: "CCRD",
      city: "Muzaffarnagar",
      website: "www.iet.com",
      student: [
        {
          name: "Prachi",
          age: 22,
          email: "prachi@email.com",
        },
        {
          name: "Rohan",
          age: 24,
          email: "rohan@email.com",
        },
        {
          name: "Deepika",
          age: 20,
          email: "deep@email.com",
        },
      ],
    },
    {
      name: "IIT",
      city: "Delhi",
      website: "www.iet.com",
      student: [
        {
          name: "Prachi",
          age: 22,
          email: "prachi@email.com",
        },
        {
          name: "Rohan",
          age: 24,
          email: "rohan@email.com",
        },
        {
          name: "Deepika",
          age: 20,
          email: "deep@email.com",
        },
      ],
    },
  ];

  // useEffect in React Js
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    // callOnce();
     counterFunction();
  }, [counter]);

  function counterFunction(){
    console.log("Counter Function:",counter);
    
  }

  function callOnce() {
    console.log("collOnce called one time");
  }

  // Handle Props SideEffect with React Js
     const [count, setCount] = useState(0)

  return (
    <>
      <h1>7. Get Input Field</h1>
      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
        placeholder="Enter User Name"
      />
      <h2>{val}</h2>
      <button onClick={() => setVal("")}>Clear Value</button>

      <h1>8.Controller Component</h1>
      <form action="" method="get">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter Name"
        />
        <br /> <br />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
        <br /> <br />
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
        />
        <br /> <br />
        <button>Submit</button>
        <button
          onClick={() => {
            setName(""), setPassword(""), setEmail("");
          }}
          style={{ marginLeft: "10px" }}
        >
          Clear
        </button>
        <h2>{name}</h2>
        <h2>{password}</h2>
        <h2>{email}</h2>
      </form>

      <h1>9. Handle CheckBox in React Js</h1>
      <Skills />

      <h1>10. Handle Radio and Dropdown</h1>
      <h4>Select Gender</h4>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        value={"male"}
        checked={gender == "male"}
        name="gender"
        id="male"
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        value={"female"}
        name="gender"
        checked={gender == "female"}
        id="female"
        style={{ marginLeft: "10px" }}
      />
      <label htmlFor="female">Female</label>

      <h2> Selected Gender: {gender}</h2>

      <h2>Select City</h2>
      <select
        onChange={(event) => setCity(event.target.value)}
        defaultValue={"amritsar"}
      >
        <option value="jaipur ">Jaipur</option>
        <option value="amritsar">Amritsar</option>
        <option value="delhi">Delhi</option>
      </select>
      <h2>Selected City: {city}</h2>

      <h1>11. Loop in JSX with map function</h1>
      <table border="2 solid white">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Dummy Data</h1>
      <table border="2 solid white">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ramya</td>
            <td>20</td>
            <td>ramya@gmail.com</td>
          </tr>
          <tr>
            <td>Shekhar</td>
            <td>22</td>
            <td>shekhar@gmail.com</td>
          </tr>
          <tr>
            <td>Tanu</td>
            <td>18</td>
            <td>tanu@gmail.com</td>
          </tr>
        </tbody>
      </table>

      <h1>Reuse Component in Loop</h1>
      {userData.map((user) => (
        <div key={user.id}>
          <User data={user} />
        </div>
      ))}

      <h1>12. Digital Clock in React Js</h1>
      <select onChange={(event) => setColor(event.target.value)}>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
      </select>
      <Clock color={color} />

      <h1>12. Nested Looping with Component</h1>
      {collegeData.map((college, index) => (
        <div key={index}>
          <College college={college} />
        </div>
      ))}

      <h1>13.useEffect in React Js</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>
      <button onClick={() => setData(data + 1)} style={{ marginLeft: "10px" }}>
        Data: {data}
      </button>

      <h1>Handle Props Side effect with React Js</h1>
       <Counter count={count}/>
       <button onClick={()=> setCount(count+1)}>count:{count} </button>

    </>
  );
}

export default App;
