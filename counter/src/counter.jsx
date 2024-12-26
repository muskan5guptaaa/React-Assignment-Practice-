// Counter.js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div style={styles.container}>
      <h1 style={styles.count}>{count}</h1>
      <div>
        <button style={styles.button} onClick={increaseCount}>Increase</button>
        <button style={styles.button} onClick={decreaseCount}>Decrease</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  count: {
    fontSize: '2rem',
    margin: '20px 0',
  },
  button: {
    fontSize: '1rem',
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    transition: 'background-color 0.3s',
  },
};

export default Counter;
