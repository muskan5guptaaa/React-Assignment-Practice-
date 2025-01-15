import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("Taylor");
  const [age, setAge] = useState(42);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setAge('');
    console.log("Form Submitted: ", { name, age });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="age">Age:</label>
          <br />
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value) || 0)}
            placeholder="Enter your age"
          />
        </div>
        <button type="button" onClick={() => setAge(age + 1)}>
          Increment Age
        </button>
        <button type="submit" style={{ marginLeft: "10px" }}>
          Submit
        </button>
      </form>
      <p style={{ marginTop: "20px" }}>
        Hello, {name}. You are {age} years old.
      </p>
    </div>
  );
}
