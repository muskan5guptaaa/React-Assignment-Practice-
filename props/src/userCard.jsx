// UserCard.js
import React from 'react';

const UserCard = ({ name, age, occupation }) => {
  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.detail}><strong>Age:</strong> {age}</p>
      <p style={styles.detail}><strong>Occupation:</strong> {occupation}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  name: {
    color: '#333',
  },
  detail: {
    color: '#555',
  },
};

export default UserCard;
