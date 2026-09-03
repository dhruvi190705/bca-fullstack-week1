import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Current Time: {time.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;