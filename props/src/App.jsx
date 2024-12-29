import React from "react";
import UserCard from "./UserCard";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <UserCard name="John Doe" age={30} occupation="Software Engineer" />
      <UserCard name="Jane Smith" age={25} occupation="Product Manager" />
      <UserCard name="Alice Johnson" age={35} occupation="Designer" />
    </div>
  );
}

export default App;
