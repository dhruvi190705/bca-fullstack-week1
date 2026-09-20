import { useState, useMemo } from 'react';

function SquareCalculator() {
  const [number, setNumber] = useState(0);

  const square = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <h2>Square: {square}</h2>
    </div>
  );
}

export default SquareCalculator;