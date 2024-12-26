// App.js
import React from 'react';
import UserCard from './userCard';

const App = () => {
  const users = [
    { name: 'Alice Johnson', age: 25, occupation: 'Software Developer' },
    { name: 'Bob Smith', age: 30, occupation: 'Data Scientist' },
    { name: 'Charlie Brown', age: 28, occupation: 'Graphic Designer' },
  ];

  return (
    <div style={appStyles.container}>
      <h1 style={appStyles.header}>User Profiles</h1>
      <div style={appStyles.userList}>
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            age={user.age}
            occupation={user.occupation}
          />
        ))}
      </div>
    </div>
  );
};

const appStyles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    color: '#444',
  },
  userList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};

export default App;
