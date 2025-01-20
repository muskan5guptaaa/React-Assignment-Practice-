import React, { useState, useEffect } from "react";

function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.title = `Theme: ${isDarkMode ? "Dark" : "Light"}`;
  }, [isDarkMode]); 
  return (
    <div style={{ backgroundColor: isDarkMode ? "#333" : "#fff", color: isDarkMode ? "#fff" : "#000" }}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggler;
