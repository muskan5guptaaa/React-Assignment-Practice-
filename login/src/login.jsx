import React, { useState } from 'react';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle Login
  const handleLogin = () => {
    setIsLoggedIn(true);  // Update state to logged in
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
  };

  return (
    <div>
      <h2>{isLoggedIn ? "Welcome, User!" : "Please log in."}</h2>
      
      {!isLoggedIn ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default Login;
