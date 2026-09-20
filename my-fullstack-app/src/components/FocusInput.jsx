import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <input ref={inputRef} type="text" placeholder="Click button to focus here" />
      <button onClick={handleFocus} style={{ marginLeft: "10px" }}>Focus Input</button>
    </div>
  );
}

export default FocusInput;