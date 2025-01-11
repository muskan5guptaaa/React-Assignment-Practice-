import React, { useState } from 'react';

function TextInputExample() {
  const [text, setText] = useState(''); // Declare a state variable for the text

  const handleChange = (event) => {
    setText(event.target.value); // Update the state with the input value
  };

  return (
    <div>
      <input
        type="text"
        value={text} // Bind the state to the input's value
        onChange={handleChange} // Update state on input change
        placeholder="Type something here..."
      />
      <p>You typed: {text}</p> {/* Display the current state */}
    </div>
  );
}

export default TextInputExample;
