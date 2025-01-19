import React, { useState, useEffect } from "react";

const Timer = () => {
  const [count, setCount] = useState(1000); 

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 1; 
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 500); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Timer: {count}</h1>
      {count === 0 && <h2>Time's up!</h2>}
    </div>
  );
};

export default Timer;
