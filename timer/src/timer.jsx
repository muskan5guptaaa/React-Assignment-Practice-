import React, { useState, useEffect } from 'react'; // Importing React and hooks
import ReactDOM from 'react-dom'; // Importing ReactDOM for rendering the app

function Timer() {
  const [count, setCount] = useState(0); // State for count
  const [calculation, setCalculation] = useState(0); // State for calculation result

  // Effect hook to update the calculation when count changes
  useEffect(() => {
    setCalculation(count * 2); // Set calculation based on count
  }, [count]); // Trigger effect when count changes

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button> {/* Increment count */}
      <p>Calculation: {calculation}</p> {/* Display the result of calculation */}
    </>
  );
}

// Rendering the Counter component in the root div
ReactDOM.render(<Timer />, document.getElementById('root'));
