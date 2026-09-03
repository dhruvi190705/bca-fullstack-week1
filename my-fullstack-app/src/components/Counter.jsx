import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component loaded or count changed:", count);
  }, [count]);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Counter Value: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>Decrease</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>Reset</button>
    </div>
  );
}

export default Counter;