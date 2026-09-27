import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import FoodMenu from "./components/FoodMenu";
import Orders from "./components/Orders";
import { CartProvider } from "./context/CartContext";

function About() {
  return (
    <div style={styles.page}>
      <h1>ℹ️ About QuickBite</h1>

      <p>
        QuickBite is an online food ordering system
        developed as a BCA Full Stack Development project.
      </p>

      <p>
        Customers can view food items, add items to cart,
        place orders and view their orders.
      </p>
    </div>
  );
}

function CartPage() {
  return (
    <div style={styles.page}>
      <h1>🛒 Cart</h1>

      <p>
        Your cart is available on the Food Menu page.
      </p>

      <Link to="/menu">
        Go to Food Menu
      </Link>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <nav style={styles.navbar}>
          <div style={styles.logo}>
            🍔 QuickBite
          </div>

          <div style={styles.links}>
            <Link to="/" style={styles.link}>
              🏠 Home
            </Link>

            <Link to="/menu" style={styles.link}>
              🍔 Food Menu
            </Link>

            <Link to="/cart" style={styles.link}>
              🛒 Cart
            </Link>

            <Link to="/orders" style={styles.link}>
              📦 My Orders
            </Link>

            <Link to="/about" style={styles.link}>
              ℹ️ About
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/menu" element={<FoodMenu />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    backgroundColor: "#e85d04",
    color: "white",
    flexWrap: "wrap",
    gap: "15px",
  },

  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },

  links: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },

  page: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
};

export default App;