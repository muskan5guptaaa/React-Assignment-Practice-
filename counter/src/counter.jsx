import React, { useState ,useEffect} from "react";

const Counter=()=>{
  const[count,setCount]=useState(0);

 useEffect(() => {
  console.log("User updated count:", count);
}, [count]); // This will log the count every time it updates


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter</h1>
      <h2>Current Count: {count}</h2>
      <div>
        <button
          onClick={()=>{
            setCount(count+1);
          }}
          style={{
            margin: "5px",
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Increase
        </button>
        <button
          onClick={()=>{
            setCount(count-1);
          }}
          style={{
            margin: "5px",
            padding: "10px 20px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
