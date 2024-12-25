// UserCard.js
import React from "react";

const UserCard = ({ name, age, occupation }) => {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    margin: "1rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "300px",
  },
};

export default UserCard;
