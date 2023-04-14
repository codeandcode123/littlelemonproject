import React from "react";
export default function Adder() {
  const [number, setNumber] = React.useState(1);
  function increment() {
    setNumber((x) => x + 1);
  }
  return (
    <>
      <h1 data-test-id="currentNumber"> {number} </h1> 
      <button data-testid="add-one" onClick={increment}>
          Add one 
      </button>
    </>
  );
}
