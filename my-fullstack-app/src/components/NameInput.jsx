import { useState } from 'react';

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <p>Hello, {name || "Guest"}!</p>
    </div>
  );
}

export default NameInput;