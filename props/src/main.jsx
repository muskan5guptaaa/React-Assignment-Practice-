// App.js
import React from "react";
import UserCard from "./userCard";

const App = () => {
  const users = [
    { name: "Alice Johnson", age: 28, occupation: "Software Engineer" },
    { name: "Bob Smith", age: 34, occupation: "Designer" },
    { name: "Charlie Brown", age: 40, occupation: "Product Manager" },
  ];

  return (
    <div style={styles.container}>
      <h1>User List</h1>
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          age={user.age}
          occupation={user.occupation}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
  },
};

export default App;
