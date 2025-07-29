import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      <h2>useState error example</h2>
      <h3>{count}</h3>
      <button onClick={handleCount} className="btn">
        ajouter +1
      </button>
    </>
  );
};

export default UseStateBasics;
