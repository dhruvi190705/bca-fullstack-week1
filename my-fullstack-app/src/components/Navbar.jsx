import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#333", padding: "15px", textAlign: "center" }}>
      <Link to="/" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>About</Link>
      <Link to="/contact" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;