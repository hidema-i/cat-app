import React, { useState } from "react";

const LikeButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div
      style={{
        marginTop: "20px",
        backgroundColor: "rgb(231,76,60)",
        color: "white",
        padding: "0.8rem",
        borderRadius: "0.4rem",
        cursor: "pointer",
      }}
    >
      <span onClick={handleClick}>👍{count}</span>
    </div>
  );
};

export default LikeButton;
