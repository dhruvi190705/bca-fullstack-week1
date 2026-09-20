import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemeDisplay() {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Current Theme: {theme}</h2>
    </div>
  );
}

export default ThemeDisplay;