import React, { useState } from "react";

function LikeCheckbox() {
  // State variable to track if the checkbox is liked
  const [liked, setLiked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setLiked(event.target.checked); // Update state with checkbox value
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={handleCheckboxChange}
        />
        Like this
      </label>
      <p>{liked ? "You like this!" : "Do you like this?"}</p>
    </div>
  );
}

export default LikeCheckbox;
