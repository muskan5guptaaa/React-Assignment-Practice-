import React, { useState } from "react";

const Tasklist=()=>{
  const[tasks,setTasks]=useState([
    "Muskan",
    "gupta",
    "Developer",
    "React"
  ])

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Task List</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "black",
            }}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasklist;
