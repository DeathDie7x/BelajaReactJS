import React from "react";

const Input = ({value="",...props}) => {
  return (
    <input
      type="text"
      placeholder="Input Task Here..."
      
      {...props}
    />
  );
};

export default Input;