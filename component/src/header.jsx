// Header.js
import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Welcome to My App</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "1rem",
    textAlign: "center",
  },
};

export default Header;
